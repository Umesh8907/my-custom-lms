import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for the specific path
const isProtectedRoute = createRouteMatcher(["/course/[courseId]/page"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/course/:courseId/page", "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
