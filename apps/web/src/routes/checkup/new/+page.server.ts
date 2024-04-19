import { fail, redirect, type Actions, type RequestEvent } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const invites = formData.getAll('invites');
    const vitals = formData.getAll('vitals');

    if (!name) {
      return fail(400, {validation: {name, missing: true}});
    }

    return redirect(302, "/checkup/new");
  }
}
