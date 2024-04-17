import z from 'zod';
export const signupInput = z.object({
    email: z.string().email({message:"Invalid email"}),
    name: z.string(),
    password: z.string().min(6,{
        message:"Password length should be 6 or more than 6"
    })
})
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string()
})
export const createPostinput = z.object({
    title: z.string().min(1),
    content: z.string()
})
export const updatepostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional()
})
export type SignupType = z.infer<typeof signupInput>;
export type SigninType = z.infer<typeof signinInput>;
export type CreatePostType = z.infer<typeof createPostinput>;
export type UpdatePostType = z.infer<typeof updatepostInput>;
