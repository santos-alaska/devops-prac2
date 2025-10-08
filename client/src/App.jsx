// // 'use client';

// // import { useState, useEffect } from 'react';
// // import TaskList from './components/TaskList';
// // import AddTaskDialog from './components/AddTaskDialog';
// // import LoadingSpinner from './components/LoadingSpinner';
// // import { taskService } from './services/taskService';

// // function App() {
// //   const [tasks, setTasks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isDialogOpen, setIsDialogOpen] = useState(false);

// //   // Fetch tasks on component mount
// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const fetchTasks = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const response = await taskService.getAllTasks();
// //       setTasks(response.data);
// //     } catch (err) {
// //       setError('Failed to fetch tasks. Please try again.');
// //       console.error('Error fetching tasks:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAddTask = async (taskData) => {
// //     try {
// //       const response = await taskService.createTask(taskData);
// //       setTasks((prevTasks) => [response.data, ...prevTasks]);
// //       setIsDialogOpen(false);
// //       return { success: true };
// //     } catch (err) {
// //       console.error('Error creating task:', err);
// //       return {
// //         success: false,
// //         error: err.message || 'Failed to create task',
// //       };
// //     }
// //   };

// //   const handleDeleteTask = async (taskId) => {
// //     try {
// //       await taskService.deleteTask(taskId);
// //       setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
// //     } catch (err) {
// //       setError('Failed to delete task. Please try again.');
// //       console.error('Error deleting task:', err);
// //     }
// //   };

// //   const handleRetry = () => {
// //     fetchTasks();
// //   };

// //   // let sangam = 'unused variable here';

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Header */}
// //       <header className="bg-white shadow-sm border-b">
// //         <div className="max-w-4xl mx-auto px-4 py-6">
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <h1 className="text-3xl font-bold text-gray-900">Task Manager Edited</h1>
// //               <p className="text-gray-600 mt-1">Simple task management for DevOps demo</p>
// //             </div>
// //             <button
// //               onClick={() => setIsDialogOpen(true)}
// //               className="bg-black text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //             >
// //               Add Task
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="max-w-4xl mx-auto px-4 py-8">
// //         {loading ? (
// //           <LoadingSpinner />
// //         ) : error ? (
// //           <div className="text-center py-12">
// //             <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
// //               <div className="text-red-600 mb-4">
// //                 <svg
// //                   className="w-12 h-12 mx-auto"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
// //                   />
// //                 </svg>
// //               </div>
// //               <h3 className="text-lg font-medium text-red-800 mb-2">Error</h3>
// //               <p className="text-red-700 mb-4">{error}</p>
// //               <button
// //                 onClick={handleRetry}
// //                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
// //               >
// //                 Try Again
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
// //         )}
// //       </main>

// //       {/* Add Task Dialog */}
// //       {isDialogOpen && (
// //         <AddTaskDialog onClose={() => setIsDialogOpen(false)} onSubmit={handleAddTask} />
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// 'use client';

// import { useState, useEffect } from 'react';
// import TaskList from './components/TaskList';
// import AddTaskDialog from './components/AddTaskDialog';
// import LoadingSpinner from './components/LoadingSpinner';
// import { taskService } from './services/taskService';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await taskService.getAllTasks();
//       setTasks(response.data);
//     } catch (err) {
//       setError('Failed to fetch tasks. Please try again.');
//       console.error('Error fetching tasks:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddTask = async (taskData) => {
//     try {
//       const response = await taskService.createTask(taskData);
//       setTasks((prevTasks) => [response.data, ...prevTasks]);
//       setIsDialogOpen(false);
//       return { success: true };
//     } catch (err) {
//       console.error('Error creating task:', err);
//       return {
//         success: false,
//         error: err.message || 'Failed to create task',
//       };
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       await taskService.deleteTask(taskId);
//       setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
//     } catch (err) {
//       setError('Failed to delete task. Please try again.');
//       console.error('Error deleting task:', err);
//     }
//   };

//   const handleRetry = () => {
//     fetchTasks();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-white text-gray-800 font-sans">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-md">
//         <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">TaskBoard 🧩</h1>
//             <p className="text-sm text-sky-50 mt-1">
//               Manage your daily workflow effortlessly.
//             </p>
//           </div>
//           <button
//             onClick={() => setIsDialogOpen(true)}
//             className="bg-white text-sky-600 hover:bg-sky-100 px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             + Add Task
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto px-6 py-10">
//         {loading ? (
//           <LoadingSpinner />
//         ) : error ? (
//           <div className="text-center py-12">
//             <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto shadow-sm">
//               <div className="text-red-600 mb-3">
//                 <svg
//                   className="w-10 h-10 mx-auto"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 9v2m0 4h.01M4.93 19h14.14c1.5 0 2.46-1.65 1.7-2.48L13.7 4.02c-.77-.83-1.96-.83-2.74 0L3.23 16.52c-.76.83.2 2.48 1.7 2.48z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold text-red-700 mb-2">Error</h3>
//               <p className="text-red-600 mb-4">{error}</p>
//               <button
//                 onClick={handleRetry}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white/80 backdrop-blur-md border border-cyan-100 shadow-xl rounded-2xl p-6">
//             <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
//           </div>
//         )}
//       </main>

//       {/* Add Task Dialog */}
//       {isDialogOpen && (
//         <AddTaskDialog onClose={() => setIsDialogOpen(false)} onSubmit={handleAddTask} />
//       )}

//       {/* Footer */}
//       <footer className="text-center text-sm text-gray-500 py-6">
//         Built with ❤️ by DevOps Learner | © {new Date().getFullYear()} TaskBoard
//       </footer>
//     </div>
//   );
// }

// export default App;



'use client';

import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskDialog from './components/AddTaskDialog';
import LoadingSpinner from './components/LoadingSpinner';
import { taskService } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await taskService.createTask(taskData);
      setTasks((prev) => [response.data, ...prev]);
      setIsDialogOpen(false);
      return { success: true };
    } catch (err) {
      console.error('Error creating task:', err);
      return { success: false, error: err.message || 'Failed to create task' };
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  // const test = "this is a text"

  const handleRetry = () => fetchTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-sm border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
              Task Manager
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Manage your tasks easily – built for DevOps project
            </p>
          </div>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            + Add Task
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-white shadow-md border border-red-100 rounded-lg p-6 max-w-sm mx-auto">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Error
              </h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        )}
      </main>

      {/* Dialog */}
      {isDialogOpen && (
        <AddTaskDialog
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleAddTask}
        />
      )}
    </div>
  );
}

export default App;
