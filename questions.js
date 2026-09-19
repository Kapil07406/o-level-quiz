const quizData = {

    M1: [
        {
            question: "What is the smallest unit of data?",
            options: ["KB", "Byte", "MB", "Bit"],
            answer: 3,
            correctAnswer: "Bit"
        },
        {
            question: "CPU stands for:",
            options: ["Computer Processing Unit", "Central Program Unit", "Central Processing Unit", "Control Processing Unit"],
            answer: 2,
            correctAnswer: "Central Processing Unit"
        },
        {
            question: "Which of the following is an input device?",
            options: ["Keyboard", "Printer", "Speaker", "Monitor"],
            answer: 0,
            correctAnswer: "Keyboard"
        },
        {
            question: "Which memory is volatile?",
            options: ["ROM", "RAM", "DVD", "Hard Disk"],
            answer: 1,
            correctAnswer: "RAM"
        },
        {
            question: "Which device produces a hard copy?",
            options: ["Printer", "Mouse", "Scanner", "Keyboard"],
            answer: 0,
            correctAnswer: "Printer"
        },
        {
            question: "ALU performs:",
            options: ["Storage operations", "Printing operations", "Arithmetic and logical operations", "Network operations"],
            answer: 2,
            correctAnswer: "Arithmetic and logical operations"
        },
        {
            question: "Which is an example of system software?",
            options: ["Web Browser", "LibreOffice Calc", "Operating System", "LibreOffice Writer"],
            answer: 2,
            correctAnswer: "Operating System"
        },
        {
            question: "Which of these is an operating system?",
            options: ["Ubuntu", "Calc", "Writer", "Chrome"],
            answer: 0,
            correctAnswer: "Ubuntu"
        },
        {
            question: "One byte contains:",
            options: ["8 bits", "16 bits", "32 bits", "4 bits"],
            answer: 0,
            correctAnswer: "8 bits"
        },
        {
            question: "Which is secondary storage?",
            options: ["Hard Disk", "Register", "Cache", "RAM"],
            answer: 0,
            correctAnswer: "Hard Disk"
        },
        {
            question: "GUI stands for:",
            options: ["General Utility Interface", "General User Internet", "Graphical User Interface", "Graphical Utility Input"],
            answer: 2,
            correctAnswer: "Graphical User Interface"
        },
        {
            question: "Which shortcut is used to copy?",
            options: ["Ctrl+X", "Ctrl+V", "Ctrl+P", "Ctrl+C"],
            answer: 3,
            correctAnswer: "Ctrl+C"
        },
        {
            question: "Which shortcut is used to paste?",
            options: ["Ctrl+S", "Ctrl+X", "Ctrl+V", "Ctrl+C"],
            answer: 2,
            correctAnswer: "Ctrl+V"
        },
        {
            question: "Which shortcut is used to save a document?",
            options: ["Ctrl+S", "Ctrl+N", "Ctrl+P", "Ctrl+O"],
            answer: 0,
            correctAnswer: "Ctrl+S"
        },
        {
            question: "Which shortcut is used to print?",
            options: ["Ctrl+F", "Ctrl+P", "Ctrl+C", "Ctrl+S"],
            answer: 1,
            correctAnswer: "Ctrl+P"
        },
        {
            question: "Ctrl+B is used for:",
            options: ["Italic", "Center", "Bold", "Underline"],
            answer: 2,
            correctAnswer: "Bold"
        },
        {
            question: "Ctrl+I is used for:",
            options: ["Italic", "Justify", "Bold", "Underline"],
            answer: 0,
            correctAnswer: "Italic"
        },
        {
            question: "Ctrl+U is used for:",
            options: ["Bold", "Paste", "Underline", "Italic"],
            answer: 2,
            correctAnswer: "Underline"
        },
        {
            question: "Which alignment makes both margins even?",
            options: ["Left", "Center", "Justify", "Right"],
            answer: 2,
            correctAnswer: "Justify"
        },
        {
            question: "Which feature checks spelling mistakes?",
            options: ["Mail Merge", "Spell Check", "Footer", "Header"],
            answer: 1,
            correctAnswer: "Spell Check"
        },
        {
            question: "Which feature creates personalized letters?",
            options: ["Find", "AutoCorrect", "Word Count", "Mail Merge"],
            answer: 3,
            correctAnswer: "Mail Merge"
        },
        {
            question: "Information repeated at the top of a page is called:",
            options: ["Comment", "Header", "Table", "Footer"],
            answer: 1,
            correctAnswer: "Header"
        },
        {
            question: "Information repeated at the bottom of a page is called:",
            options: ["Toolbar", "Sidebar", "Footer", "Header"],
            answer: 2,
            correctAnswer: "Footer"
        },
        {
            question: "LibreOffice Writer is used for:",
            options: ["Spreadsheets", "Presentations", "Database", "Word Processing"],
            answer: 3,
            correctAnswer: "Word Processing"
        },
        {
            question: "The default extension of LibreOffice Writer is:",
            options: [".odt", ".odp", ".odb", ".ods"],
            answer: 0,
            correctAnswer: ".odt"
        },
        {
            question: "LibreOffice Calc is used for:",
            options: ["Word Processing", "Spreadsheets", "Email", "Presentations"],
            answer: 1,
            correctAnswer: "Spreadsheets"
        },
        {
            question: "The default extension of LibreOffice Calc is:",
            options: [".odb", ".odt", ".odp", ".ods"],
            answer: 3,
            correctAnswer: ".ods"
        },
        {
            question: "The intersection of a row and column is called:",
            options: ["Cell", "Range", "Sheet", "Table"],
            answer: 0,
            correctAnswer: "Cell"
        },
        {
            question: "Columns in Calc are identified by:",
            options: ["Colors", "Letters", "Numbers", "Symbols"],
            answer: 1,
            correctAnswer: "Letters"
        },
        {
            question: "Rows in Calc are identified by:",
            options: ["Numbers", "Colors", "Letters", "Symbols"],
            answer: 0,
            correctAnswer: "Numbers"
        },
        {
            question: "A group of cells is called:",
            options: ["Column", "Sheet", "Row", "Range"],
            answer: 3,
            correctAnswer: "Range"
        },
        {
            question: "A formula in Calc normally begins with:",
            options: ["&", "#", "@", "="],
            answer: 3,
            correctAnswer: "="
        },
        {
            question: "Which function calculates the total?",
            options: ["MIN", "SUM", "MAX", "COUNT"],
            answer: 1,
            correctAnswer: "SUM"
        },
        {
            question: "Which function calculates average?",
            options: ["MAX", "MIN", "SUM", "AVERAGE"],
            answer: 3,
            correctAnswer: "AVERAGE"
        },
        {
            question: "Which function returns the largest value?",
            options: ["SUM", "MIN", "MAX", "COUNT"],
            answer: 2,
            correctAnswer: "MAX"
        },
        {
            question: "Which function returns the smallest value?",
            options: ["MAX", "MIN", "AVERAGE", "SUM"],
            answer: 1,
            correctAnswer: "MIN"
        },
        {
            question: "Which function counts numbers?",
            options: ["COUNT", "MAX", "SUM", "MIN"],
            answer: 0,
            correctAnswer: "COUNT"
        },
        {
            question: "Which feature represents data graphically?",
            options: ["Header", "Footer", "Chart", "Mail Merge"],
            answer: 2,
            correctAnswer: "Chart"
        },
        {
            question: "Which feature automatically fills a series?",
            options: ["Mail Merge", "AutoFill", "Spell Check", "AutoCorrect"],
            answer: 1,
            correctAnswer: "AutoFill"
        },
        {
            question: "LibreOffice Impress is used for:",
            options: ["Presentations", "Word Processing", "Email", "Spreadsheets"],
            answer: 0,
            correctAnswer: "Presentations"
        },
        {
            question: "The default extension of Impress is:",
            options: [".ods", ".odb", ".odt", ".odp"],
            answer: 3,
            correctAnswer: ".odp"
        },
        {
            question: "A single page of a presentation is called:",
            options: ["Cell", "Slide", "Record", "Sheet"],
            answer: 1,
            correctAnswer: "Slide"
        },
        {
            question: "Which feature controls movement between slides?",
            options: ["Filter", "Animation", "Mail Merge", "Slide Transition"],
            answer: 3,
            correctAnswer: "Slide Transition"
        },
        {
            question: "Which feature adds movement effects to objects?",
            options: ["Animation", "Transition", "Sorting", "Formula"],
            answer: 0,
            correctAnswer: "Animation"
        },
        {
            question: "Which view helps rearrange slides?",
            options: ["Normal View", "Data View", "Formula View", "Slide Sorter"],
            answer: 3,
            correctAnswer: "Slide Sorter"
        },
        {
            question: "Which key commonly starts a slideshow?",
            options: ["F7", "F12", "F2", "F5"],
            answer: 3,
            correctAnswer: "F5"
        },
        {
            question: "WWW stands for:",
            options: ["World Wide Web", "Web World Work", "World Web Wide", "Wide World Web"],
            answer: 0,
            correctAnswer: "World Wide Web"
        },
        {
            question: "URL stands for:",
            options: ["Uniform Reference Link", "Universal Resource Link", "Universal Reference Locator", "Uniform Resource Locator"],
            answer: 3,
            correctAnswer: "Uniform Resource Locator"
        },
        {
            question: "Which software is used to access websites?",
            options: ["Compiler", "Web Browser", "Spreadsheet", "Word Processor"],
            answer: 1,
            correctAnswer: "Web Browser"
        },
        {
            question: "Which is a web browser?",
            options: ["LibreOffice", "Mozilla Firefox", "Calc", "Ubuntu"],
            answer: 1,
            correctAnswer: "Mozilla Firefox"
        },
        {
            question: "Which is a search engine?",
            options: ["Google", "Writer", "Ubuntu", "Calc"],
            answer: 0,
            correctAnswer: "Google"
        },
        {
            question: "HTTP stands for:",
            options: ["High Text Transfer Program", "HyperText Tool Protocol", "HyperText Transfer Protocol", "Hyper Transfer Text Protocol"],
            answer: 2,
            correctAnswer: "HyperText Transfer Protocol"
        },
        {
            question: "HTTPS provides:",
            options: ["Storage", "Formatting", "Secure web communication", "Printing"],
            answer: 2,
            correctAnswer: "Secure web communication"
        },
        {
            question: "FTP is commonly used for:",
            options: ["Browsing", "File Transfer", "Email", "Printing"],
            answer: 1,
            correctAnswer: "File Transfer"
        },
        {
            question: "LAN stands for:",
            options: ["Local Area Network", "Local Access Network", "Large Area Network", "Long Area Network"],
            answer: 0,
            correctAnswer: "Local Area Network"
        },
        {
            question: "MAN stands for:",
            options: ["Metropolitan Area Network", "Medium Area Network", "Main Area Network", "Multiple Area Network"],
            answer: 0,
            correctAnswer: "Metropolitan Area Network"
        },
        {
            question: "WAN stands for:",
            options: ["World Access Network", "Wireless Area Network", "Web Area Network", "Wide Area Network"],
            answer: 3,
            correctAnswer: "Wide Area Network"
        },
        {
            question: "Which network covers a small geographical area?",
            options: ["MAN", "LAN", "Internet", "WAN"],
            answer: 1,
            correctAnswer: "LAN"
        },
        {
            question: "Which device connects different networks?",
            options: ["Keyboard", "Switch", "Monitor", "Router"],
            answer: 3,
            correctAnswer: "Router"
        },
        {
            question: "Which device connects multiple devices in a LAN?",
            options: ["Switch", "Printer", "Monitor", "Scanner"],
            answer: 0,
            correctAnswer: "Switch"
        },
        {
            question: "Wi-Fi provides:",
            options: ["Wireless network connectivity", "Only storage", "Only audio", "Only printing"],
            answer: 0,
            correctAnswer: "Wireless network connectivity"
        },
        {
            question: "IP stands for:",
            options: ["Internet Program", "Information Program", "Internet Protocol", "Internal Protocol"],
            answer: 2,
            correctAnswer: "Internet Protocol"
        },
        {
            question: "Which topology has a central device?",
            options: ["Bus", "Star", "Ring", "Mesh"],
            answer: 1,
            correctAnswer: "Star"
        },
        {
            question: "Which topology uses a backbone cable?",
            options: ["Bus", "Mesh", "Ring", "Star"],
            answer: 0,
            correctAnswer: "Bus"
        },
        {
            question: "Which symbol is used in an email address?",
            options: ["$", "#", "@", "%"],
            answer: 2,
            correctAnswer: "@"
        },
        {
            question: "BCC stands for:",
            options: ["Backup Computer Copy", "Browser Carbon Copy", "Basic Computer Copy", "Blind Carbon Copy"],
            answer: 3,
            correctAnswer: "Blind Carbon Copy"
        },
        {
            question: "An email attachment is:",
            options: ["A browser", "An email password", "A file sent with an email", "A search engine"],
            answer: 2,
            correctAnswer: "A file sent with an email"
        },
        {
            question: "Spam means:",
            options: ["Video call", "Encrypted email", "Secure email", "Unwanted messages"],
            answer: 3,
            correctAnswer: "Unwanted messages"
        },
        {
            question: "e-Governance means:",
            options: ["Online gaming", "Use of ICT for government services", "Video editing", "Computer repair"],
            answer: 1,
            correctAnswer: "Use of ICT for government services"
        },
        {
            question: "DigiLocker is mainly used for:",
            options: ["Video editing", "Programming", "Digital documents", "Gaming"],
            answer: 2,
            correctAnswer: "Digital documents"
        },
        {
            question: "UPI stands for:",
            options: ["Unified Program Interface", "United Payment Interface", "Universal Payment Internet", "Unified Payments Interface"],
            answer: 3,
            correctAnswer: "Unified Payments Interface"
        },
        {
            question: "OTP stands for:",
            options: ["One Time Password", "Online Transfer Protocol", "One Transfer Process", "Official Transaction Password"],
            answer: 0,
            correctAnswer: "One Time Password"
        },
        {
            question: "QR stands for:",
            options: ["Quick Response", "Quick Result", "Query Response", "Quality Record"],
            answer: 0,
            correctAnswer: "Quick Response"
        },
        {
            question: "NEFT stands for:",
            options: ["National Electronic Funds Transfer", "National Electronic File Transfer", "New Electronic Funds Tool", "Network Electronic Funds Transfer"],
            answer: 0,
            correctAnswer: "National Electronic Funds Transfer"
        },
        {
            question: "RTGS stands for:",
            options: ["Real Time General System", "Real Transfer Global Service", "Rapid Transfer Gross Service", "Real Time Gross Settlement"],
            answer: 3,
            correctAnswer: "Real Time Gross Settlement"
        },
        {
            question: "IMPS stands for:",
            options: ["Internet Money Payment System", "Immediate Payment Service", "Immediate Processing Settlement", "Instant Money Processing Service"],
            answer: 1,
            correctAnswer: "Immediate Payment Service"
        },
        {
            question: "IoT stands for:",
            options: ["Internet of Things", "Input of Things", "Integrated Online Technology", "Internet of Technology"],
            answer: 0,
            correctAnswer: "Internet of Things"
        },
        {
            question: "AI stands for:",
            options: ["Artificial Intelligence", "Automatic Internet", "Artificial Internet", "Advanced Input"],
            answer: 0,
            correctAnswer: "Artificial Intelligence"
        },
        {
            question: "Cloud computing provides:",
            options: ["Computing and storage services over a network", "Only offline storage", "Only keyboard input", "Only printing"],
            answer: 0,
            correctAnswer: "Computing and storage services over a network"
        },
        {
            question: "Blockchain is:",
            options: ["A digital ledger technology", "A presentation format", "A word processor", "A network cable"],
            answer: 0,
            correctAnswer: "A digital ledger technology"
        },
        {
            question: "3D printing is also called:",
            options: ["Virtual manufacturing", "Cloud manufacturing", "Digital manufacturing", "Additive manufacturing"],
            answer: 3,
            correctAnswer: "Additive manufacturing"
        },
        {
            question: "RPA stands for:",
            options: ["Robotic Process Automation", "Remote Program Access", "Robotic Programming Application", "Rapid Process Analysis"],
            answer: 0,
            correctAnswer: "Robotic Process Automation"
        },
        {
            question: "Phishing is used to:",
            options: ["Increase RAM", "Print documents", "Create charts", "Steal sensitive information through deception"],
            answer: 3,
            correctAnswer: "Steal sensitive information through deception"
        },
        {
            question: "Which information should never be shared with others?",
            options: ["Computer model", "Website name", "OTP and password", "Document title"],
            answer: 2,
            correctAnswer: "OTP and password"
        },
        {
            question: "Which is a good cybersecurity practice?",
            options: ["Use strong passwords", "Open every unknown link", "Share your OTP", "Use the same password everywhere"],
            answer: 0,
            correctAnswer: "Use strong passwords"
        },
        {
            question: "A firewall helps to:",
            options: ["Print documents", "Protect a network/system from unauthorized access", "Create presentations", "Increase screen size"],
            answer: 1,
            correctAnswer: "Protect a network/system from unauthorized access"
        },
        {
            question: "Antivirus software is used to:",
            options: ["Create slides", "Create spreadsheets", "Detect and remove malware", "Browse websites"],
            answer: 2,
            correctAnswer: "Detect and remove malware"
        },
        {
            question: "Malware means:",
            options: ["Mail software", "Manual software", "Management software", "Malicious software"],
            answer: 3,
            correctAnswer: "Malicious software"
        },
        {
            question: "A computer virus is:",
            options: ["An input device", "A network cable", "A type of malicious software", "A printer"],
            answer: 2,
            correctAnswer: "A type of malicious software"
        },
        {
            question: "Which is a safe password?",
            options: ["R7@kL9#pQ2", "123456", "password", "Kapil123"],
            answer: 0,
            correctAnswer: "R7@kL9#pQ2"
        },
        {
            question: "What should you do with a suspicious email link?",
            options: ["Ignore/delete it", "Send your password", "Click immediately", "Share it"],
            answer: 0,
            correctAnswer: "Ignore/delete it"
        },
        {
            question: "Which is an example of digital payment?",
            options: ["UPI", "Printer", "Keyboard", "Scanner"],
            answer: 0,
            correctAnswer: "UPI"
        },
        {
            question: "ATM stands for:",
            options: ["Automated Transaction Method", "Any Time Money", "Automatic Transfer Machine", "Automated Teller Machine"],
            answer: 3,
            correctAnswer: "Automated Teller Machine"
        },
        {
            question: "Which device is used to scan a QR code?",
            options: ["Printer", "Keyboard", "Speaker", "Camera/Smartphone"],
            answer: 3,
            correctAnswer: "Camera/Smartphone"
        },
        {
            question: "Bitcoin is:",
            options: ["A network cable", "A word processor", "An operating system", "A digital cryptocurrency"],
            answer: 3,
            correctAnswer: "A digital cryptocurrency"
        },
        {
            question: "Which technology connects everyday physical devices to the Internet?",
            options: ["IoT", "FTP", "PDF", "HTML"],
            answer: 0,
            correctAnswer: "IoT"
        },
        {
            question: "Which technology can provide computing resources through the Internet?",
            options: ["Cloud Computing", "Scanner", "Bluetooth", "Printer"],
            answer: 0,
            correctAnswer: "Cloud Computing"
        },
        {
            question: "Which one is an example of cloud storage?",
            options: ["CPU", "Printer", "Google Drive", "Keyboard"],
            answer: 2,
            correctAnswer: "Google Drive"
        },
        {
            question: "Which protocol is commonly used for receiving email?",
            options: ["HTTP", "FTP", "HTML", "POP3"],
            answer: 3,
            correctAnswer: "POP3"
        },
        {
            question: "SMTP is mainly used for:",
            options: ["Printing", "Receiving web pages", "File compression", "Sending email"],
            answer: 3,
            correctAnswer: "Sending email"
        },
        {
            question: "Which device converts digital signals for communication over certain networks?",
            options: ["Scanner", "Keyboard", "Monitor", "Modem"],
            answer: 3,
            correctAnswer: "Modem"
        },
        {
            question: "What is a computer network?",
            options: ["Connected computers/devices that share resources", "A printer", "A single computer", "An operating system"],
            answer: 0,
            correctAnswer: "Connected computers/devices that share resources"
        },
        {
            question: "Which of the following is NOT an output device?",
            options: ["Printer", "Speaker", "Keyboard", "Monitor"],
            answer: 2,
            correctAnswer: "Keyboard"
        },
    ],

    Weekly: [

        {
            question: "Where is the document name displayed in LibreOffice Writer?",
            options: ["Status Bar", "Title Bar", "Menu Bar", "Sidebar"],
            answer: 1
        },

        {
            question: "What is the default name of a new Writer document?",
            options: ["Document1", "Untitled 1", "New Document", "Writer1"],
            answer: 1
        },

        {
            question: "Which feature helps you set margins and tab stops in Writer?",
            options: ["Ruler", "Sidebar", "Status Bar", "Navigator"],
            answer: 0
        },

        {
            question: "Which area is used to access properties and formatting options?",
            options: ["Ruler", "Sidebar", "Title Bar", "Status Bar"],
            answer: 1
        },

        {
            question: "What is the default zoom level in LibreOffice Writer?",
            options: ["50%", "75%", "100%", "125%"],
            answer: 2
        },

        {
            question: "What is the minimum zoom level in Writer?",
            options: ["10%", "20%", "25%", "50%"],
            answer: 1
        },

        {
            question: "What is the maximum zoom level in Writer?",
            options: ["200%", "300%", "400%", "500%"],
            answer: 2
        },

        {
            question: "Which shortcut inserts a page break?",
            options: ["Ctrl + Enter", "Shift + Enter", "Ctrl + Shift + Enter", "Alt + Enter"],
            answer: 0
        },

        {
            question: "Which shortcut inserts a line break?",
            options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Shift + Enter"],
            answer: 1
        },

        {
            question: "Which shortcut inserts a manual page break?",
            options: ["Ctrl + Enter", "Ctrl + Shift + Enter", "Shift + Enter", "Alt + Enter"],
            answer: 0
        },

        {
            question: "What is the default page orientation in Writer?",
            options: ["Landscape", "Portrait", "Square", "Automatic"],
            answer: 1
        },

        {
            question: "What is the default page margin in Writer?",
            options: ["0.5 inch", "1 inch", "1.5 inch", "2 inch"],
            answer: 1
        },

        {
            question: "What is the default highlight color?",
            options: ["Yellow", "Blue", "Green", "Red"],
            answer: 0
        },

        {
            question: "Which option changes the case of selected text?",
            options: ["Toggle Case", "Font Color", "Highlight", "Character"],
            answer: 0
        },

        {
            question: "Which command cycles through different text cases?",
            options: ["Change Case", "Cycle Case", "Toggle Case", "Text Case"],
            answer: 1
        },

        {
            question: "Which list uses symbols instead of numbers?",
            options: ["Numbered List", "Ordered List", "Bulleted List", "Multilevel List"],
            answer: 2
        },

        {
            question: "What is the default bullet symbol?",
            options: ["Square", "Circle", "Arrow", "Star"],
            answer: 1
        },

        {
            question: "Which shortcut toggles bullets?",
            options: ["Shift + F12", "F12", "Ctrl + F12", "Alt + F12"],
            answer: 0
        },

        {
            question: "Which list uses numbers?",
            options: ["Bulleted List", "Numbered List", "Symbol List", "Bullet List"],
            answer: 1
        },

        {
            question: "Which shortcut is used to insert a table?",
            options: ["Ctrl + F12", "F12", "Shift + F12", "Alt + F12"],
            answer: 0
        },

        {
            question: "How can you increase the width of a table?",
            options: ["Drag the table border", "Press F12", "Use Navigator", "Use Status Bar"],
            answer: 0
        },

        {
            question: "How can you decrease the width of a table?",
            options: ["Drag the table border inward", "Press Ctrl + Enter", "Use Sidebar", "Use Navigator"],
            answer: 0
        },

        {
            question: "What appears when an object is selected for resizing?",
            options: ["Rulers", "Resize handles", "Status Bar", "Navigator"],
            answer: 1
        },

        {
            question: "Which key combination is commonly used to duplicate an object?",
            options: ["Ctrl + C", "Ctrl + D", "Ctrl + V", "Ctrl + X"],
            answer: 1
        },

        {
            question: "What is the extension of a Writer template?",
            options: [".odt", ".ott", ".ods", ".odp"],
            answer: 1
        },

        {
            question: "What is the default extension of a Writer document?",
            options: [".odt", ".ott", ".ods", ".odp"],
            answer: 0
        },

        {
            question: "Which command is used to save a document with a different name?",
            options: ["Save", "Save All", "Save As", "Export"],
            answer: 2
        },

        {
            question: "Where can you create or manage custom templates?",
            options: ["Template Manager", "Navigator", "Sidebar", "Status Bar"],
            answer: 0
        },

        {
            question: "Which command saves all open documents?",
            options: ["Save", "Save As", "Save All", "Export"],
            answer: 2
        },

        {
            question: "Which shortcut opens Template Manager?",
            options: ["Ctrl + Shift + N", "Ctrl + F12", "Ctrl + N", "Alt + N"],
            answer: 0
        },

        {
            question: "Which shortcut opens Extension Manager?",
            options: ["Ctrl + Alt + E", "Ctrl + Shift + E", "Alt + E", "Ctrl + E"],
            answer: 1
        },

        {
            question: "Which feature is used to search and replace text?",
            options: ["Navigator", "Find and Replace", "Word Count", "AutoCorrect"],
            answer: 1
        },

        {
            question: "Find and Replace is available under which menu?",
            options: ["File", "Edit", "View", "Insert"],
            answer: 1
        },

        {
            question: "Which menu contains the option to donate to LibreOffice?",
            options: ["Help", "File", "Tools", "View"],
            answer: 0
        },

        {
            question: "Which option is used to insert the page number field?",
            options: ["Insert > Field > Page Number", "File > Page Number", "View > Page Number", "Tools > Page Number"],
            answer: 0
        },

        {
            question: "What can be inserted in a Header or Footer?",
            options: ["Page number", "Date", "Text", "All of these"],
            answer: 3
        },

        {
            question: "Which shortcut activates Full Screen mode?",
            options: ["Ctrl + Shift + J", "Ctrl + J", "F11", "Ctrl + F11"],
            answer: 0
        },

        {
            question: "Track Changes is available under which menu?",
            options: ["File", "Edit", "View", "Tools"],
            answer: 1
        },

        {
            question: "Which shortcut opens the Navigator?",
            options: ["F5", "F7", "F9", "F11"],
            answer: 0
        },

        {
            question: "Where is the New Window command generally found?",
            options: ["File", "Window", "View", "Tools"],
            answer: 1
        },

        {
            question: "Which shortcut creates a new document?",
            options: ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
            answer: 0
        },

        {
            question: "Which shortcut opens an existing document?",
            options: ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
            answer: 1
        },

        {
            question: "Which shortcut saves a document?",
            options: ["Ctrl + S", "Ctrl + O", "Ctrl + N", "Ctrl + P"],
            answer: 0
        },

        {
            question: "Which shortcut prints a document?",
            options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
            answer: 1
        },

        {
            question: "Which shortcut selects all content?",
            options: ["Ctrl + A", "Ctrl + C", "Ctrl + X", "Ctrl + V"],
            answer: 0
        },

        {
            question: "Which shortcut is used for Undo?",
            options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"],
            answer: 1
        },

        {
            question: "Which shortcut is used for Redo?",
            options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + R", "Ctrl + D"],
            answer: 1
        },

        {
            question: "Which shortcut makes text Bold?",
            options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
            answer: 0
        },

        {
            question: "Which shortcut makes text Italic?",
            options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + T"],
            answer: 1
        },

        {
            question: "Which shortcut Underlines text?",
            options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + L"],
            answer: 2
        }

    ]
};

