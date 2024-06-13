// src/components/LoadingSpinner.tsx

const LoadingSpinner = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex items-center justify-center space-x-2">
				<div className="w-6 h-6 border-4 border-t-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
				<span className="text-indigo-500 font-medium">Loading...</span>
			</div>
		</div>
	)
}

export default LoadingSpinner
