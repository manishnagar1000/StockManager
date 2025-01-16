const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-medium">Total Users</h3>
                    <p className="mt-2 text-2xl font-bold">120</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-medium">Total Stocks</h3>
                    <p className="mt-2 text-2xl font-bold">50</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-medium">Total Savings</h3>
                    <p className="mt-2 text-2xl font-bold">₹5,00,000</p>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
