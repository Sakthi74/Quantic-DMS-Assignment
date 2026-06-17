import React, { useMemo,useState } from 'react'


const used = new Set();

// Generate unique random IDs
function uniqueRandomId() {
let id;
do {
id = Math.floor(Math.random() * 1000) + 1;
} while (used.has(id));

used.add(id);
return id;
}

    const DataFiltertask = () => {
        const [sortBy, setSortBy] = useState("");
        const [customerName, setCustomerName] = useState("");
        const [currentPage, setCurrentPage] = useState(1);


// Generate initial data only once
        const [records, setRecords] = useState(() => {
            const arr = [];

            for (let i = 0; i < 80; i++) {
                arr.push({
                    id: uniqueRandomId(),
                    customer: `Customer ${i + 1}`,
                    Created_At: Date.now() - i * 6000,
                });
            }
            
            return arr;
        });

        // Sorting logic
        const sortedRecords = useMemo(() => {
            const data = [...records];
            
            if (sortBy === "id") {
                data.sort((a, b) => a.id - b.id);
            } else if (sortBy === "date") {
                data.sort((a, b) => b.Created_At - a.Created_At);
            }

            return data;
        }, [records, sortBy]);

        // Add new record
        function addRecord() {
            if (customerName.trim() === "") return;
            
            const newRecord = {
                id: uniqueRandomId(),
                customer: customerName,
                Created_At: Date.now(),
            };

            setRecords((prev) => [...prev, newRecord]);
            setCustomerName("");
        }
        
        //pagination concept
        
        const rowsPerPage = 10;
        const totalPages = Math.ceil(sortedRecords.length / rowsPerPage)
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedRecords = sortedRecords.slice(startIndex, endIndex);
        console.log(totalPages)

        return (
            <div className='text-white p-4'>
                <h2 className='text-white text-2xl font-extrabold p-3'>Customer Table</h2>

                <button className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  ' onClick={() => { setSortBy("id"); setCurrentPage(1); }}>
                    Sort by ID
                </button>

                <button className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  ' onClick={() => { setSortBy("date");  setCurrentPage(1); }}>
                    Sort by Date
                </button>

                <br />
                <br />

                <input
                    type="text"
                    placeholder="Enter Customer Name"
                    value={customerName}
                    className='border-2 border-white p-3 rounded-xl'
                    onChange={(e) => setCustomerName(e.target.value)}
                />

                <button onClick={addRecord} className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  '>
                    Add Customer
                </button>

                <br />
                <br />

                <table border="1" cellPadding="10" className='border-white border-2'>
                    <thead className='border-white border-2'>
                        <tr >
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Created At</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedRecords.map((item) => (
                            <tr key={item.id}>
                                <td className='border-white border-2 p-2 text-center'>{item.id}</td>
                                <td className='border-white border-2 p-2 text-center'>{item.customer}</td>
                                <td className='border-white border-2 p-2 text-center'>{new Date(item.Created_At).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='p-3 gap-12'>
                <button onClick={()=>setCurrentPage((prev)=>Math.max(prev-1,1))} className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  '>
                    PREVIOUS PAGE</button>
                <button className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  '>PAGE {currentPage} OF {totalPages}</button>
                <button onClick={()=>setCurrentPage((prev)=>Math.min(prev+1,totalPages))} className='p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black cursor-pointer  '>NEXT PAGE</button>
                </div>
                </div>
        );
    };


export default DataFiltertask;