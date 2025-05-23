import { z } from 'zod';

export const idEntitySchema = z.object({
    id: z.string()
});

export const boxCreateUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    address: z.string().optional(),
    can_see_managed_users: z.boolean().optional(),
    external_app_user_id: z.string().optional(),
    is_exempt_from_device_limits: z.boolean().optional(),
    is_exempt_from_login_verification: z.boolean().optional(),
    is_external_collab_restricted: z.boolean().optional(),
    is_platform_access_only: z.boolean().optional(),
    is_sync_enabled: z.boolean().optional(),
    job_title: z.string().optional(),
    language: z.string().optional(),
    phone: z.string().optional(),
    role: z.enum(['coadmin', 'user']).optional(),
    space_amount: z.number().optional(),
    status: z.enum(['active', 'inactive', 'cannot_delete_edit', 'cannot_delete_edit_upload']).optional(),
    timezone: z.string().optional(),
    tracking_codes: z
        .array(
            z.object({
                type: z.enum(['tracking_code']).optional(),
                name: z.string().optional(),
                value: z.string().optional()
            })
        )
        .optional()
});

export const trackingCodeSchema = z.object({
    type: z.enum(['tracking_code']).optional(),
    name: z.string().optional(),
    value: z.string().optional()
});

export const notificationEmailSchema = z.object({
    email: z.string(),
    is_confirmed: z.boolean()
});

export const enterpriseSchema = z.object({
    id: z.string(),
    type: z.string(),
    name: z.string()
});

export const createdUserSchema = z.object({
    id: z.string(),
    type: z.string(),
    address: z.string().optional(),
    avatar_url: z.string().optional(),
    can_see_managed_users: z.boolean(),
    created_at: z.string(),
    enterprise: enterpriseSchema,
    external_app_user_id: z.string().optional(),
    hostname: z.string(),
    is_exempt_from_device_limits: z.boolean(),
    is_exempt_from_login_verification: z.boolean(),
    is_external_collab_restricted: z.boolean(),
    is_platform_access_only: z.boolean(),
    is_sync_enabled: z.boolean(),
    job_title: z.string().optional(),
    language: z.string().optional(),
    login: z.string(),
    max_upload_size: z.number(),
    modified_at: z.string(),
    name: z.string(),
    notification_email: notificationEmailSchema,
    phone: z.string().optional(),
    role: z.string(),
    space_amount: z.number(),
    space_used: z.number(),
    status: z.string(),
    timezone: z.string().optional(),
    tracking_codes: z.array(trackingCodeSchema).optional()
});

export const boxDeleteUserSchema = z.object({
    id: z.string(),
    force: z.boolean().optional(),
    notify: z.boolean().optional()
});

export const folderContentInputSchema = z.object({
    id: z.string().optional(),
    marker: z.string().optional()
});
