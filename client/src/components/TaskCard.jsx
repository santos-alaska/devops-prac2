// "use client";

// import { useState } from "react";
// import { formatDate } from "../utils/dateUtils";

// const TaskCard = ({ task, onDelete }) => {
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       setIsDeleting(true);
//       try {
//         await onDelete(task._id);
//       } catch (error) {
//         console.error("Error deleting task:", error);
//       } finally {
//         setIsDeleting(false);
//       }
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
//       <div className="flex justify-between items-start">
//         <div className="flex-1 min-w-0">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2 break-words">
//             {task.title}
//           </h3>
//           <p className="text-gray-700 mb-3 break-words leading-relaxed">
//             {task.description}
//           </p>
//           <div className="flex items-center text-sm text-gray-500">
//             <svg
//               className="w-4 h-4 mr-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             Created {formatDate(task.createdAt)}
//           </div>
//         </div>

//         <button
//           onClick={handleDelete}
//           disabled={isDeleting}
//           className="ml-4 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//           title="Delete task"
//         >
//           {isDeleting ? (
//             <svg
//               className="w-5 h-5 animate-spin"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;


"use client";

import { useState } from "react";
import { formatDate } from "../utils/dateUtils";

const TaskCard = ({ task, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setIsDeleting(true);
      try {
        await onDelete(task._id);
      } catch (error) {
        console.error("Error deleting task:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start">
        {/* Task Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 break-words leading-tight">
            {task.title}
          </h3>
          <p className="text-gray-700 mb-3 break-words leading-relaxed text-sm">
            {task.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Created {formatDate(task.createdAt)}
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="ml-4 bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-600 hover:text-red-700 p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Delete task"
        >
          {isDeleting ? (
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
