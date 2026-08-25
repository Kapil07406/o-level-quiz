const quizData = {
    M1: [

        {
            question: "What is the smallest unit of data?",
            options: ["Byte", "Bit", "KB", "MB"],
            answer: 1
        },

        {
            question: "CPU stands for:",
            options: [
                "Central Processing Unit",
                "Computer Processing Unit",
                "Central Program Unit",
                "Control Processing Unit"
            ],
            answer: 0
        },

        {
            question: "Which of the following is an input device?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            answer: 2
        },

        {
            question: "Which memory is volatile?",
            options: ["ROM", "Hard Disk", "DVD", "RAM"],
            answer: 3
        },

        {
            question: "Which device produces a hard copy?",
            options: ["Scanner", "Printer", "Mouse", "Keyboard"],
            answer: 1
        },

        {
            question: "ALU performs:",
            options: [
                "Printing operations",
                "Arithmetic and logical operations",
                "Storage operations",
                "Network operations"
            ],
            answer: 1
        },

        {
            question: "Which is an example of system software?",
            options: ["LibreOffice Writer", "LibreOffice Calc", "Operating System", "Web Browser"],
            answer: 2
        },

        {
            question: "Which of these is an operating system?",
            options: ["Ubuntu", "Chrome", "Writer", "Calc"],
            answer: 0
        },

        {
            question: "One byte contains:",
            options: ["4 bits", "16 bits", "8 bits", "32 bits"],
            answer: 2
        },

        {
            question: "Which is secondary storage?",
            options: ["RAM", "Hard Disk", "Register", "Cache"],
            answer: 1
        },

        {
            question: "GUI stands for:",
            options: [
                "General User Internet",
                "Graphical User Interface",
                "Graphical Utility Input",
                "General Utility Interface"
            ],
            answer: 1
        },

        {
            question: "Which shortcut is used to copy?",
            options: ["Ctrl+X", "Ctrl+V", "Ctrl+C", "Ctrl+P"],
            answer: 2
        },

        {
            question: "Which shortcut is used to paste?",
            options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+S"],
            answer: 0
        },

        {
            question: "Which shortcut is used to save a document?",
            options: ["Ctrl+P", "Ctrl+O", "Ctrl+N", "Ctrl+S"],
            answer: 3
        },

        {
            question: "Which shortcut is used to print?",
            options: ["Ctrl+P", "Ctrl+C", "Ctrl+S", "Ctrl+F"],
            answer: 0
        },

        {
            question: "Ctrl+B is used for:",
            options: ["Italic", "Underline", "Bold", "Center"],
            answer: 2
        },

        {
            question: "Ctrl+I is used for:",
            options: ["Bold", "Italic", "Underline", "Justify"],
            answer: 1
        },

        {
            question: "Ctrl+U is used for:",
            options: ["Underline", "Bold", "Italic", "Paste"],
            answer: 0
        },

        {
            question: "Which alignment makes both margins even?",
            options: ["Left", "Right", "Center", "Justify"],
            answer: 3
        },

        {
            question: "Which feature checks spelling mistakes?",
            options: ["Mail Merge", "Spell Check", "Header", "Footer"],
            answer: 1
        },

        {
            question: "Which feature creates personalized letters?",
            options: ["Mail Merge", "AutoCorrect", "Word Count", "Find"],
            answer: 0
        },

        {
            question: "Information repeated at the top of a page is called:",
            options: ["Footer", "Header", "Table", "Comment"],
            answer: 1
        },

        {
            question: "Information repeated at the bottom of a page is called:",
            options: ["Header", "Toolbar", "Footer", "Sidebar"],
            answer: 2
        },

        {
            question: "LibreOffice Writer is used for:",
            options: ["Presentations", "Word Processing", "Spreadsheets", "Database"],
            answer: 1
        },

        {
            question: "The default extension of LibreOffice Writer is:",
            options: [".ods", ".odp", ".odt", ".odb"],
            answer: 2
        },

        {
            question: "LibreOffice Calc is used for:",
            options: ["Spreadsheets", "Presentations", "Word Processing", "Email"],
            answer: 0
        },

        {
            question: "The default extension of LibreOffice Calc is:",
            options: [".odt", ".ods", ".odp", ".odb"],
            answer: 1
        },

        {
            question: "The intersection of a row and column is called:",
            options: ["Range", "Cell", "Sheet", "Table"],
            answer: 1
        },

        {
            question: "Columns in Calc are identified by:",
            options: ["Numbers", "Symbols", "Letters", "Colors"],
            answer: 2
        },

        {
            question: "Rows in Calc are identified by:",
            options: ["Numbers", "Letters", "Colors", "Symbols"],
            answer: 0
        },

        {
            question: "A group of cells is called:",
            options: ["Range", "Row", "Column", "Sheet"],
            answer: 0
        },

        {
            question: "A formula in Calc normally begins with:",
            options: ["#", "@", "=", "&"],
            answer: 2
        },

        {
            question: "Which function calculates the total?",
            options: ["MAX", "SUM", "MIN", "COUNT"],
            answer: 1
        },

        {
            question: "Which function calculates average?",
            options: ["SUM", "MAX", "AVERAGE", "MIN"],
            answer: 2
        },

        {
            question: "Which function returns the largest value?",
            options: ["MIN", "COUNT", "SUM", "MAX"],
            answer: 3
        },

        {
            question: "Which function returns the smallest value?",
            options: ["MIN", "MAX", "SUM", "AVERAGE"],
            answer: 0
        },

        {
            question: "Which function counts numbers?",
            options: ["SUM", "COUNT", "MAX", "MIN"],
            answer: 1
        },

        {
            question: "Which feature represents data graphically?",
            options: ["Chart", "Footer", "Header", "Mail Merge"],
            answer: 0
        },

        {
            question: "Which feature automatically fills a series?",
            options: ["AutoFill", "AutoCorrect", "Mail Merge", "Spell Check"],
            answer: 0
        },

        {
            question: "LibreOffice Impress is used for:",
            options: ["Spreadsheets", "Presentations", "Word Processing", "Email"],
            answer: 1
        },

        {
            question: "The default extension of Impress is:",
            options: [".odp", ".odt", ".ods", ".odb"],
            answer: 0
        },

        {
            question: "A single page of a presentation is called:",
            options: ["Sheet", "Cell", "Slide", "Record"],
            answer: 2
        },

        {
            question: "Which feature controls movement between slides?",
            options: ["Animation", "Slide Transition", "Mail Merge", "Filter"],
            answer: 1
        },

        {
            question: "Which feature adds movement effects to objects?",
            options: ["Animation", "Transition", "Formula", "Sorting"],
            answer: 0
        },

        {
            question: "Which view helps rearrange slides?",
            options: ["Normal View", "Slide Sorter", "Formula View", "Data View"],
            answer: 1
        },

        {
            question: "Which key commonly starts a slideshow?",
            options: ["F2", "F5", "F7", "F12"],
            answer: 1
        },

        {
            question: "WWW stands for:",
            options: [
                "World Wide Web",
                "World Web Wide",
                "Wide World Web",
                "Web World Work"
            ],
            answer: 0
        },

        {
            question: "URL stands for:",
            options: [
                "Universal Resource Link",
                "Uniform Resource Locator",
                "Universal Reference Locator",
                "Uniform Reference Link"
            ],
            answer: 1
        },

        {
            question: "Which software is used to access websites?",
            options: ["Web Browser", "Spreadsheet", "Compiler", "Word Processor"],
            answer: 0
        },

        {
            question: "Which is a web browser?",
            options: ["Ubuntu", "LibreOffice", "Mozilla Firefox", "Calc"],
            answer: 2
        },

        {
            question: "Which is a search engine?",
            options: ["Google", "Ubuntu", "Writer", "Calc"],
            answer: 0
        },

        {
            question: "HTTP stands for:",
            options: [
                "HyperText Transfer Protocol",
                "High Text Transfer Program",
                "Hyper Transfer Text Protocol",
                "HyperText Tool Protocol"
            ],
            answer: 0
        },

        {
            question: "HTTPS provides:",
            options: ["Printing", "Secure web communication", "Storage", "Formatting"],
            answer: 1
        },

        {
            question: "FTP is commonly used for:",
            options: ["File Transfer", "Email", "Printing", "Browsing"],
            answer: 0
        },

        {
            question: "LAN stands for:",
            options: [
                "Large Area Network",
                "Local Access Network",
                "Local Area Network",
                "Long Area Network"
            ],
            answer: 2
        },

        {
            question: "MAN stands for:",
            options: [
                "Metropolitan Area Network",
                "Main Area Network",
                "Medium Area Network",
                "Multiple Area Network"
            ],
            answer: 0
        },

        {
            question: "WAN stands for:",
            options: [
                "Wireless Area Network",
                "Wide Area Network",
                "Web Area Network",
                "World Access Network"
            ],
            answer: 1
        },

        {
            question: "Which network covers a small geographical area?",
            options: ["WAN", "MAN", "LAN", "Internet"],
            answer: 2
        },

        {
            question: "Which device connects different networks?",
            options: ["Switch", "Router", "Keyboard", "Monitor"],
            answer: 1
        },

        {
            question: "Which device connects multiple devices in a LAN?",
            options: ["Switch", "Printer", "Scanner", "Monitor"],
            answer: 0
        },

        {
            question: "Wi-Fi provides:",
            options: [
                "Wireless network connectivity",
                "Only printing",
                "Only storage",
                "Only audio"
            ],
            answer: 0
        },

        {
            question: "IP stands for:",
            options: [
                "Internet Protocol",
                "Internet Program",
                "Internal Protocol",
                "Information Program"
            ],
            answer: 0
        },

        {
            question: "Which topology has a central device?",
            options: ["Bus", "Ring", "Star", "Mesh"],
            answer: 2
        },

        {
            question: "Which topology uses a backbone cable?",
            options: ["Star", "Bus", "Ring", "Mesh"],
            answer: 1
        },

        {
            question: "Which symbol is used in an email address?",
            options: ["#", "@", "$", "%"],
            answer: 1
        },

        {
            question: "BCC stands for:",
            options: [
                "Blind Carbon Copy",
                "Basic Computer Copy",
                "Browser Carbon Copy",
                "Backup Computer Copy"
            ],
            answer: 0
        },

        {
            question: "An email attachment is:",
            options: [
                "A file sent with an email",
                "An email password",
                "A browser",
                "A search engine"
            ],
            answer: 0
        },

        {
            question: "Spam means:",
            options: [
                "Secure email",
                "Unwanted messages",
                "Encrypted email",
                "Video call"
            ],
            answer: 1
        },

        {
            question: "e-Governance means:",
            options: [
                "Use of ICT for government services",
                "Online gaming",
                "Computer repair",
                "Video editing"
            ],
            answer: 0
        },

        {
            question: "DigiLocker is mainly used for:",
            options: [
                "Digital documents",
                "Gaming",
                "Video editing",
                "Programming"
            ],
            answer: 0
        },

        {
            question: "UPI stands for:",
            options: [
                "Universal Payment Internet",
                "Unified Payments Interface",
                "United Payment Interface",
                "Unified Program Interface"
            ],
            answer: 1
        },

        {
            question: "OTP stands for:",
            options: [
                "One Time Password",
                "Online Transfer Protocol",
                "One Transfer Process",
                "Official Transaction Password"
            ],
            answer: 0
        },

        {
            question: "QR stands for:",
            options: [
                "Quick Response",
                "Quick Result",
                "Query Response",
                "Quality Record"
            ],
            answer: 0
        },

        {
            question: "NEFT stands for:",
            options: [
                "National Electronic Funds Transfer",
                "National Electronic File Transfer",
                "New Electronic Funds Tool",
                "Network Electronic Funds Transfer"
            ],
            answer: 0
        },

        {
            question: "RTGS stands for:",
            options: [
                "Real Transfer Global Service",
                "Real Time Gross Settlement",
                "Real Time General System",
                "Rapid Transfer Gross Service"
            ],
            answer: 1
        },

        {
            question: "IMPS stands for:",
            options: [
                "Immediate Payment Service",
                "Internet Money Payment System",
                "Instant Money Processing Service",
                "Immediate Processing Settlement"
            ],
            answer: 0
        },

        {
            question: "IoT stands for:",
            options: [
                "Internet of Technology",
                "Input of Things",
                "Internet of Things",
                "Integrated Online Technology"
            ],
            answer: 2
        },

        {
            question: "AI stands for:",
            options: [
                "Automatic Internet",
                "Artificial Intelligence",
                "Advanced Input",
                "Artificial Internet"
            ],
            answer: 1
        },

        {
            question: "Cloud computing provides:",
            options: [
                "Computing and storage services over a network",
                "Only printing",
                "Only keyboard input",
                "Only offline storage"
            ],
            answer: 0
        },

        {
            question: "Blockchain is:",
            options: [
                "A digital ledger technology",
                "A word processor",
                "A network cable",
                "A presentation format"
            ],
            answer: 0
        },

        {
            question: "3D printing is also called:",
            options: [
                "Digital manufacturing",
                "Additive manufacturing",
                "Cloud manufacturing",
                "Virtual manufacturing"
            ],
            answer: 1
        },

        {
            question: "RPA stands for:",
            options: [
                "Remote Program Access",
                "Robotic Process Automation",
                "Robotic Programming Application",
                "Rapid Process Analysis"
            ],
            answer: 1
        },

        {
            question: "Phishing is used to:",
            options: [
                "Steal sensitive information through deception",
                "Increase RAM",
                "Print documents",
                "Create charts"
            ],
            answer: 0
        },

        {
            question: "Which information should never be shared with others?",
            options: [
                "Computer model",
                "OTP and password",
                "Website name",
                "Document title"
            ],
            answer: 1
        },

        {
            question: "Which is a good cybersecurity practice?",
            options: [
                "Share your OTP",
                "Use strong passwords",
                "Open every unknown link",
                "Use the same password everywhere"
            ],
            answer: 1
        },

        {
            question: "A firewall helps to:",
            options: [
                "Protect a network/system from unauthorized access",
                "Print documents",
                "Create presentations",
                "Increase screen size"
            ],
            answer: 0
        },

        {
            question: "Antivirus software is used to:",
            options: [
                "Detect and remove malware",
                "Create spreadsheets",
                "Browse websites",
                "Create slides"
            ],
            answer: 0
        },

        {
            question: "Malware means:",
            options: [
                "Malicious software",
                "Mail software",
                "Management software",
                "Manual software"
            ],
            answer: 0
        },

        {
            question: "A computer virus is:",
            options: [
                "A type of malicious software",
                "An input device",
                "A printer",
                "A network cable"
            ],
            answer: 0
        },

        {
            question: "Which is a safe password?",
            options: [
                "123456",
                "password",
                "Kapil123",
                "R7@kL9#pQ2"
            ],
            answer: 3
        },

        {
            question: "What should you do with a suspicious email link?",
            options: [
                "Click immediately",
                "Share it",
                "Ignore/delete it",
                "Send your password"
            ],
            answer: 2
        },

        {
            question: "Which is an example of digital payment?",
            options: ["UPI", "Keyboard", "Printer", "Scanner"],
            answer: 0
        },

        {
            question: "ATM stands for:",
            options: [
                "Automated Teller Machine",
                "Automatic Transfer Machine",
                "Automated Transaction Method",
                "Any Time Money"
            ],
            answer: 0
        },

        {
            question: "Which device is used to scan a QR code?",
            options: ["Camera/Smartphone", "Printer", "Keyboard", "Speaker"],
            answer: 0
        },

        {
            question: "Bitcoin is:",
            options: [
                "A digital cryptocurrency",
                "A word processor",
                "An operating system",
                "A network cable"
            ],
            answer: 0
        },

        {
            question: "Which technology connects everyday physical devices to the Internet?",
            options: ["IoT", "FTP", "PDF", "HTML"],
            answer: 0
        },

        {
            question: "Which technology can provide computing resources through the Internet?",
            options: ["Cloud Computing", "Bluetooth", "Printer", "Scanner"],
            answer: 0
        },

        {
            question: "Which one is an example of cloud storage?",
            options: [
                "Google Drive",
                "Keyboard",
                "Printer",
                "CPU"
            ],
            answer: 0
        },

        {
            question: "Which protocol is commonly used for receiving email?",
            options: ["POP3", "HTTP", "FTP", "HTML"],
            answer: 0
        },

        {
            question: "SMTP is mainly used for:",
            options: [
                "Sending email",
                "Receiving web pages",
                "File compression",
                "Printing"
            ],
            answer: 0
        },

        {
            question: "Which device converts digital signals for communication over certain networks?",
            options: ["Modem", "Monitor", "Keyboard", "Scanner"],
            answer: 0
        },

        {
            question: "What is a computer network?",
            options: [
                "Connected computers/devices that share resources",
                "A single computer",
                "A printer",
                "An operating system"
            ],
            answer: 0
        },

        {
            question: "Which of the following is NOT an output device?",
            options: ["Monitor", "Printer", "Speaker", "Keyboard"],
            answer: 3
        }

    ]
};