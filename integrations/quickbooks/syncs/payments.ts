import type { NangoSync, Payment, DeleteResponse } from '../../models';
import type { QuickBooksPayment } from '../types';
import { paginate } from '../helpers/paginate.js';
import { toPayment } from '../mappers/to-payment.js';
import type { PaginationParams } from '../helpers/paginate';

/**
 * Fetches payment data from QuickBooks API and saves it in batch.
 * Handles both active and voided payments, saving or deleting them based on their status.
 * For detailed endpoint documentation, refer to:
 * https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment#query-a-payment
 *
 * @param nango The NangoSync instance used for making API calls and saving data.
 * @returns A promise that resolves when the data has been successfully fetched and saved.
 */
export default async function fetchData(nango: NangoSync): Promise<void> {
    const config: PaginationParams = {
        model: 'Payment'
    };
    for await (const qPayments of paginate<QuickBooksPayment>(nango, config)) {
        const activePayments = qPayments.filter((payment) => !payment.PrivateNote?.includes('Voided') && payment.status !== 'Deleted');
        const deletedPayments = qPayments.filter((payment) => payment.PrivateNote?.includes('Voided') || payment.status === 'Deleted');

        // Process and save active payments
        if (activePayments.length > 0) {
            const mappedActivePayments = activePayments.map(toPayment);
            await nango.batchSave<Payment>(mappedActivePayments, 'Payment');
        }

        // Process deletions if this is not the first sync
        if (nango.lastSyncDate && deletedPayments.length > 0) {
            const mappedDeletedPayments = deletedPayments.map((payment) => ({
                id: payment.Id
            }));
            await nango.batchDelete<DeleteResponse>(mappedDeletedPayments, 'Payment');
        }
    }
}
