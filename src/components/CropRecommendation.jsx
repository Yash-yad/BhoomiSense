import React from 'react';

// Card component (relied upon by CropRecommendationPage)
const Card = ({ children, className = '', style = {} }) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl ${className}`} style={style}>
    {children}
  </div>
);

// The page that displays the recommendations
const CropRecommendationPage = ({ setPage, recommendations, isLoading, sensorData, t }) => (
    <div className="max-w-4xl mx-auto animate-fadeIn">
        <Card>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.recommendationPageTitle}</h2>
            
            {/* Loading spinner (while data is being fetched) */}
            {isLoading && (
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">{t.contactingModel}</p>
                </div>
            )}

            {/* Recommendations (once data has arrived) */}
            {!isLoading && recommendations && (
                <div className="animate-fadeIn">
                    <p className="text-gray-600 mb-6">{t.recommendationPageSubtitle}</p>
                    
                    {/* Summary of current sensor data */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-center">
                        <div className="p-4 bg-red-50 rounded-lg"><p className="text-sm text-red-700">{t.temperature}</p><p className="text-xl font-bold">{sensorData.temperature.toFixed(1)}°C</p></div>
                        <div className="p-4 bg-cyan-50 rounded-lg"><p className="text-sm text-cyan-700">{t.moisture}</p><p className="text-xl font-bold">{sensorData.moisture.toFixed(1)}%</p></div>
                        <div className="p-4 bg-green-50 rounded-lg"><p className="text-sm text-green-700">{t.nitrogen}</p><p className="text-xl font-bold">{sensorData.nitrogen.toFixed(1)} mg/L</p></div>
                        <div className="p-4 bg-blue-50 rounded-lg"><p className="text-sm text-blue-700">{t.ph}</p><p className="text-xl font-bold">{sensorData.ph.toFixed(1)}</p></div>
                        <div className="p-4 bg-orange-50 rounded-lg"><p className="text-sm text-orange-700">{t.phosphorus}</p><p className="text-xl font-bold">{sensorData.phosphorus.toFixed(1)} ppm</p></div>
                        <div className="p-4 bg-purple-50 rounded-lg"><p className="text-sm text-purple-700">{t.potassium}</p><p className="text-xl font-bold">{sensorData.potassium.toFixed(1)} ppm</p></div>
                    </div>
                    
                    {/* List of recommendations */}
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                        <ol className="list-decimal list-inside space-y-4">
                            {recommendations.map((rec, index) => (
                                <li key={index}>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-lg text-green-700">{rec.Crop}</span>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800">{rec.Predicted_Yield_t_ha.toFixed(2)}</p>
                                            <p className="text-sm text-gray-500">{t.tonsPerHectare}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}

            {/* Back to Dashboard Button */}
            <button 
                onClick={() => setPage('dashboard')} 
                className="mt-8 w-full bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
                {t.backToDashboard}
            </button>
        </Card>
    </div>
);

export default CropRecommendationPage;
