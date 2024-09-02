import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp 
         afterSignOutUrl="/"
         appearance={{
           elements: {
             footer: {
               display: 'none', // Hide the footer containing the "Secured by Clerk" badge
             },
           },
         }}/>
    </div>
  );
}
