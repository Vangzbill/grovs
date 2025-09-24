import React from 'react';

interface KaryaTableProps {
    data: Record<string, any>[];
}

function formatTimestamp(timestampStr: any): string {
    if (!timestampStr || typeof timestampStr !== 'string') {
        return '';
    }

    try {
        const parts = timestampStr.split(' ');
        const datePart = parts[0];
        const timePart = parts[1];

        if (!datePart || !timePart) {
            return timestampStr;
        }

        const timeComponents = timePart.split(':');
        if (timeComponents.length !== 3) {
            return timestampStr;
        }

        const hour = timeComponents[0].padStart(2, '0');
        const minute = timeComponents[1];
        const second = timeComponents[2];
        const normalizedTimePart = `${hour}:${minute}:${second}`;
        const [day, month, year] = datePart.split('/');
        if (!day || !month || !year) {
            return timestampStr;
        }

        const date = new Date(`${year}-${month}-${day}T${normalizedTimePart}`);

        if (isNaN(date.getTime())) {
            return timestampStr;
        }

        const bulanIndonesia = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        const namaBulan = bulanIndonesia[date.getMonth()];
        const tanggal = date.getDate();
        const tahun = date.getFullYear();
        const jam = String(date.getHours()).padStart(2, '0');
        const menit = String(date.getMinutes()).padStart(2, '0');
        const detik = String(date.getSeconds()).padStart(2, '0');

        return `${tanggal} ${namaBulan} ${tahun} - ${jam}:${menit}:${detik}`;

    } catch (error) {
        return timestampStr;
    }
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
                                    {header === 'Timestamp'
                                        ? formatTimestamp(row[header])
                                        : row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}