# Next.js Project Structure

With more time, I would improve the page structure to scale the project with multiple pages and utilize the routing of Next.js. Here's an example of how the structure could look:

### Breakdown of the Structure:

1. **`page.tsx`** (Home page):

   - This serves as the general landing page or admin panel of the application. It could include basic info and links to different parts of the app.

2. **`layout.tsx`** (Global layout):

   - Defines the basic structure of the application, including shared components like headers, footers, or sidebars, that are visible across all pages.

3. **`advocates/page.tsx`** (Advocates page):

   - A page dedicated to displaying the list of advocates. This page could also include search or filtering functionality, pagination, or other features specific to advocates.

4. **API Route (`api/advocates/route.ts`)**:
   - An API route that handles fetching advocate data. This can either pull data from a database or mock data, depending on the application requirements.
