import React, { useState, useEffect } from 'react';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { Download, LogIn } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminContacts: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleLogin = () => {
    if (password === '1242') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetch('https://microsoft-planner-for-project-management.onrender.com/api/contact')
        .then((res) => res.json())
        .then((data) => setContacts(data))
        .catch((err) => console.error('Error fetching contacts:', err));
    }
  }, [isAuthenticated]);

  const downloadDocx = () => {
    const tableRows = [
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph("Name")], width: { size: 25, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph("Email")], width: { size: 25, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph("Message")], width: { size: 30, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph("Date")], width: { size: 20, type: WidthType.PERCENTAGE } }),
        ],
      }),
      ...contacts.map(
        (c) =>
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph(c.name)] }),
              new TableCell({ children: [new Paragraph(c.email)] }),
              new TableCell({ children: [new Paragraph(c.message)] }),
              new TableCell({ children: [new Paragraph(new Date(c.createdAt).toLocaleString())] }),
            ],
          })
      ),
    ];

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Contact Submissions", bold: true, size: 32 })],
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: tableRows,
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'contacts.docx');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
        
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-gray-200">
          <div className="flex justify-center mb-4">
            <LogIn size={36} className="text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 p-3 w-full rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full font-semibold shadow transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <br/>
        <br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <h1 className="text-3xl font-extrabold text-gray-800">Contact Submissions</h1>
        {contacts.length > 0 && (
          <button
            onClick={downloadDocx}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors"
          >
            <Download size={18} /> Download DOCX
          </button>
        )}
      </div>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No submissions found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
          <table className="table-auto border-collapse w-full text-left">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}
                >
                  <td className="px-4 py-3 border-t">{contact.name}</td>
                  <td className="px-4 py-3 border-t">{contact.email}</td>
                  <td className="px-4 py-3 border-t">{contact.message}</td>
                  <td className="px-4 py-3 border-t">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
