import { useState } from 'react'
import data from "./data/lang.json" assert { type: "json" }

const App = () => {
  const [lang, setLang] = useState("ua")
  const content = data[0][lang]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="content bg-white rounded-2xl shadow-xl w-full max-w-3xl p-8 transition duration-300">
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => setLang("ua")}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
              lang === "ua"
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            🇺🇦 Українська
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
              lang === "en"
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            🇬🇧 English
          </button>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{content.title}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{content.description}</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">{content.tos_title}</h2>
          <p className="text-gray-600 mb-4">{content.tos_desc}</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {content.tos_content?.map((item, index) => (
              <li key={index} className="hover:text-blue-600 transition-colors duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">{content.privacy_title}</h2>
          <p className="text-gray-600 mb-4">{content.privacy_desc}</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {content.privacy_content?.map((item, index) => (
              <li key={index} className="hover:text-blue-600 transition-colors duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
