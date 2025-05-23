import type { NangoAction, ExactCustomerUpdateInput, ExactCustomerUpdateOutput } from '../../models';
import type { EO_Account, ResponsePostBody } from '../types';
import { getUser } from '../helpers/get-user.js';
import { exactCustomerUpdateInputSchema } from '../schema.zod.js';

export default async function runAction(nango: NangoAction, input: ExactCustomerUpdateInput): Promise<ExactCustomerUpdateOutput> {
    await nango.zodValidateInput({ zodSchema: exactCustomerUpdateInputSchema, input });

    const { division } = await getUser(nango);

    const body: Partial<EO_Account> = {};
    if (input.name) {
        body.Name = input.name;
    }
    if (input.email) {
        body.Email = input.email;
    }
    if (input.addressLine1) {
        body.AddressLine1 = input.addressLine1;
    }
    if (input.addressLine2) {
        body.AddressLine2 = input.addressLine2;
    }
    if (input.city) {
        body.City = input.city;
    }
    if (input.country) {
        body.CountryName = input.country;
    }
    if (input.zip) {
        body.Postcode = input.zip;
    }
    if (input.state) {
        body.StateName = input.state;
    }
    if (input.phone) {
        body.Phone = input.phone;
    }
    if (input.taxNumber) {
        body.VATNumber = input.taxNumber;
    }

    await nango.put<ResponsePostBody<EO_Account>>({
        endpoint: `/api/v1/${division}/crm/Accounts(guid'${input.id}')`,
        data: body,
        retries: 3
    });

    return {
        success: true
    };
}
