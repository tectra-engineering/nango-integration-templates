import type { NangoAction, ProxyConfiguration, User, FreshdeskCreateUser } from '../../models';
import { freshdeskCreateUserSchema } from '../schema.zod.js';
import type { FreshdeskAgent } from '../types';

export default async function runAction(nango: NangoAction, input: FreshdeskCreateUser): Promise<User> {
    await nango.zodValidateInput({ zodSchema: freshdeskCreateUserSchema, input });

    const { firstName, lastName, ...userInput } = input;

    userInput.ticket_scope = categorizeTicketScope(userInput.ticketScope || 'globalAccess');

    if (userInput.agentType) {
        userInput.agent_type = categorizeAgentType(userInput.agentType);
    }

    const config: ProxyConfiguration = {
        // https://developer.freshdesk.com/api/#create_agent
        endpoint: `/api/v2/agents`,
        data: {
            ...userInput,
            name: `${firstName} ${lastName}`
        },
        retries: 3
    };

    const response = await nango.post<FreshdeskAgent>(config);

    const { data } = response;

    const [firstNameOutput, lastNameOutput] = (data?.contact?.name ?? '').split(' ');

    const user: User = {
        id: data.id.toString(),
        firstName: firstNameOutput || firstName,
        lastName: lastNameOutput || lastName,
        email: data.contact.email || ''
    };

    return user;
}

function categorizeTicketScope(ticketScope: string): number {
    switch (ticketScope) {
        case 'globalAccess':
            return 1;
        case 'groupAccess':
            return 2;
        case 'restrictedAccess':
            return 3;
        default:
            return 1;
    }
}

function categorizeAgentType(agentType: string): number {
    switch (agentType) {
        case 'support':
            return 1;
        case 'field':
            return 2;
        case 'collaborator':
            return 3;
        default:
            return 1;
    }
}
