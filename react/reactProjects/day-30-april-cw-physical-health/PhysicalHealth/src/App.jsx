import { useState, useEffect } from "react";

function App() {
    const [healthData, setHealthData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Muscle training categories with detailed info
    const muscleTrainingTypes = [
        {
            title: 'Strength Training',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
            description: 'Strength training uses resistance to induce muscular contraction, which builds strength, anaerobic endurance, and muscle mass.',
            targets: 'Major muscle groups including chest, back, shoulders, arms, and legs.',
            benefits: 'Increases muscle mass, boosts metabolism, strengthens bones, and improves overall body composition.'
        },
        {
            title: 'Cardio Fitness',
            image: 'https://www.puregym.com/media/3f1pvvjw/the-best-gym-cardio-workouts_blogheader-notitle.jpg?quality=80',
            description: 'Cardiovascular training improves heart and lung function through sustained physical activity.',
            targets: 'Heart, lungs, and lower body muscles such as quads, hamstrings, and calves.',
            benefits: 'Improves heart health, burns calories, enhances endurance, and reduces risk of chronic diseases.'
        },
        {
            title: 'Yoga & Flexibility',
            image: 'https://www.activfitness.ch/app/uploads/2021/08/AF_2021_7652-1024x768.jpg',
            description: 'Yoga combines physical postures, breathing techniques, and meditation to improve flexibility and mental well-being.',
            targets: 'Core, hips, hamstrings, shoulders, and spine flexibility.',
            benefits: 'Enhances flexibility, reduces stress, improves posture, and promotes relaxation.'
        },
        {
            title: 'HIIT (High Intensity)',
            image: 'https://fitnesscfgyms.com/orlandofl/wp-content/uploads/sites/5/2024/09/shutterstock_2310881869.jpg',
            description: 'HIIT alternates short bursts of intense activity with recovery periods for efficient calorie burning.',
            targets: 'Full body — legs, core, chest, and arms depending on the exercises.',
            benefits: 'Burns fat quickly, improves cardiovascular fitness, and builds endurance in less time.'
        },
        {
            title: 'Pilates',
            image: 'https://img.fitimg.in/blog_photo_C80D9D07D19F25E.png?format=webp&w=480&dpr=1.3',
            description: 'Pilates focuses on controlled movements to build core strength, balance, and coordination.',
            targets: 'Core muscles, including abs, lower back, hips, and pelvic floor.',
            benefits: 'Strengthens core, improves posture, increases flexibility, and reduces back pain.'
        },
        {
            title: 'Bodyweight Training',
            image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1',
            description: 'Uses your own body weight to build strength and endurance, requiring minimal or no equipment.',
            targets: 'Chest, back, arms, core, and legs through compound movements.',
            benefits: 'Builds functional strength, enhances mobility, and is convenient for at-home workouts.'
        }
    ];

    // Fetch health data
    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://healthfinder.gov/api/v2/Topics?Format=json');
                const data = await response.json();
                setHealthData(data.Result.Topics || []);
            } catch (err) {
                setError('Failed to fetch health data');
            } finally {
                setLoading(false);
            }
        };
        fetchHealthData();
    }, []);

    // Handle search input
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter data
    const filteredData = healthData.filter(item =>
        item.Title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-3xl font-bold text-center">🏋️ Physical Health Hub</h1>
            </header>

            {/* Search Bar */}
            <div className="container mx-auto p-6">
                <input
                    type="text"
                    placeholder="Search health topics..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Muscle Training Types */}
            <main className="container mx-auto px-6 pb-6">
                <h2 className="text-2xl font-semibold mb-4">Types of Muscle Training</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {muscleTrainingTypes.map((type, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                                <p className="text-gray-700 mb-2">{type.description}</p>
                                <p className="text-sm text-gray-600 mb-1"><strong>Targets:</strong> {type.targets}</p>
                                <p className="text-sm text-gray-600"><strong>Benefits:</strong> {type.benefits}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center text-gray-600">Loading health information...</div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center text-red-500">{error}</div>
                )}

                {/* Health Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div
                                key={item.Id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold mb-2">{item.Title}</h2>
                                <p className="text-gray-600 mb-4">{item.Description}</p>
                                {item.MyHealthfinderUrl && (
                                    <a
                                        href={item.MyHealthfinderUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Learn More
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        !loading && (
                            <div className="col-span-full text-center text-gray-500">
                                No health topics found.
                            </div>
                        )
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-10">
                <p>© 2025 Physical Health Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
