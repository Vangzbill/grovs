import React from 'react';

interface KaryaTableProps {
    data: Record<string, any>[];
}

export default function KaryaTable({ data }: KaryaTableProps) {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            {headers.map((header) => (
                                <td key={header} className="px-6 py-4">
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}