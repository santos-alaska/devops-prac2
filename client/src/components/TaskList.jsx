// import TaskCard from "./TaskCard";

// const TaskList = ({ tasks, onDeleteTask }) => {
//   if (tasks.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <div className="bg-white rounded-lg shadow-sm border p-8 max-w-md mx-auto">
//           <div className="text-gray-400 mb-4">
//             <svg
//               className="w-16 h-16 mx-auto"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1}
//                 d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//               />
//             </svg>
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">
//             No tasks yet
//           </h3>
//           <p className="text-gray-600">
//             Get started by creating your first task!
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-gray-900">
//           Your Tasks ({tasks.length})
//         </h2>
//       </div>

//       <div className="grid gap-4">
//         {tasks.map((task) => (
//           <TaskCard key={task._id} task={task} onDelete={onDeleteTask} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskList;

import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-sm border border-gray-200 p-10 max-w-md mx-auto">
          <div className="text-gray-400 mb-5">
            <svg
              className="w-14 h-14 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-600 text-sm">
            Get started by creating your first task.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Your Tasks <span className="text-gray-500 text-lg">({tasks.length})</span>
        </h2>
      </div>

      {/* Task Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} onDelete={onDeleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
