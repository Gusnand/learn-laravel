import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">
          Users
        </h2>
      }
    >
      <Head title="Users" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-white">Users List</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
