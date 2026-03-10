interface UseCase {
  title: string;
  description: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

export function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Perfect For
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Designed for teams and businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
