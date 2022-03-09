import type { RequestHandler } from "@sveltejs/kit";

//TODO: persit in ddatabase
let todos: Todo[] =[];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}
// export const post: RequestHandler<Locals> = async ({ locals }) => ({ status: 200 });

export const post: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  todos.push({
      created_at: new Date(),
      text: formData.get('text') as string,
      done: false
    });
    //body: formData.get('text') as string
  return {
      status:303,
      headers:{
          location: "/"
      }
  }
}