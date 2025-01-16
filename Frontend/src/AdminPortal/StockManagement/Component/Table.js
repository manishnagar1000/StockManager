import React from 'react';

const Table = ({ stocks, onEdit, onDelete, onView }) => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 max-h-[65vh]">
      <table className="min-w-full table-auto bg-white">
      <thead className="sticky top-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              {['Company Name', 'PE Ratio', 'Promoter Holding', 'Face Value', 'ROE', 'ROCE','Valuation','Red Flag', 'Performance',  'Growth', 'Profitability', 'Entry Point',  'Forecast Rating', 'Rating', 'Actions'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-center border-r last:border-r-0 border-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr
                key={stock._id}
                className="hover:bg-gray-100 transition duration-300 text-center"
              >
                <td className="px-4 py-3 border-t border-gray-200 truncate font-medium">
                  {stock.companyName ? stock.companyName.split(' ').slice(0, 3).join(' ') : 'NA'}
                </td>
                <td className={`border border-gray-300 px-4 py-2 truncate ${stock.peRatio <= 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
{stock.peRatio?stock.peRatio: "-"}%</td>
<td className={`border border-gray-300 px-4 py-2 truncate ${stock.promoterHolding >=50 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
{stock.promoterHolding?stock.promoterHolding: "-"}%</td>
<td className={`border border-gray-300 px-4 py-2 truncate ${stock.faceValue >=5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
{stock.faceValue?stock.faceValue: "-"}%</td>
                {[ stock.roe, stock.roce].map((metric, index) => (
                  <td
                    key={index}
                    className={`px-4 py-3 border-t border-gray-200 truncate ${
                      metric >= 15 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {metric || '-'}%
                  </td>
                ))}
                {/* <td className={`px-4 py-3 border-t border-gray-200 whitespace-nowrap ${
                  stock.capSize === 'Large Cap' ? 'bg-green-100 text-green-700' :
                  stock.capSize === 'Mid Cap' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                }`}>{stock.capSize || '-'}</td> */}
                {/* <td className={`px-4 py-3 border-t border-gray-200 ${stock.investmentStatus === 'Invested' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{stock.investmentStatus}</td> */}
                <td className={`px-4 py-3 border-t border-gray-200 ${stock.valuation === "Low" ? 'bg-green-100 text-green-700' : stock.valuation ==="Avg" ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{stock.valuation || '-'}</td>
                <td className={`px-4 py-3 border-t border-gray-200 ${stock.redflag === "Low" ? 'bg-green-100 text-green-700' : stock.redflag ==="Avg" ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{stock.redflag || '-'}</td>

                {[stock.performance, stock.growth, stock.profitability, stock.entrypoint,].map((status, index) => (
                  <td
                    key={index}
                    className={`px-4 py-3 border-t border-gray-200 ${
                      status === 'High' ? 'bg-green-100 text-green-700' :
                      status === 'Avg' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}
                  >
                    {status || '-'}
                  </td>
                ))}

                <td className={`px-4 py-3 border-t border-gray-200 ${stock.forcastratings >= 80 ? 'bg-green-100 text-green-700' : stock.forcastratings >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{stock.forcastratings || '-'}</td>
                <td className={`px-4 py-3 border-t border-gray-200 ${stock.rating >= 7 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{stock.rating || '-'}</td>
                <td className="px-4 py-3 border-t border-gray-200 flex justify-center space-x-2">
                  <button
                    onClick={() => onView(stock._id)}
                    className="px-3 py-1 text-xs font-semibold text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(stock._id)}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(stock._id)}
                    className="px-3 py-1 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
