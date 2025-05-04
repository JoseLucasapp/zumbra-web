export const docsData = () => [

    {
        title: "Installation",
        description: "You can execute .zum code using the compiled Zumbra binary on different platforms.",
        content: [
            {
                title: "Windows",
                data: [
                    {
                        text: "1. Download latest zumbra-windows",
                        link: "https://github.com/JoseLucasapp/Zumbra-lang/releases"
                    },
                    {
                        text: "2. Open the command prompt on the folder of the zumbra.exe file, and run:",
                    },
                    {
                        code: "zumbra.exe myscript.zum"
                    },
                    {
                        text: "You can also add the exe on system path."
                    }
                ]
            },
            {
                title: "Linux",
                data: [
                    {
                        text: "1. Download latest zumbra-linux",
                        link: "https://github.com/JoseLucasapp/Zumbra-lang/releases"
                    },
                    {
                        text: "2. Open the command prompt on the folder of the zumbra.exe file, and run:",
                    },
                    {
                        code: "Chmod +x zumbra-file"
                    },
                    {
                        text: "3. Run:"
                    },
                    {
                        code: "./zumbra-file myscript.zum"
                    },
                    {
                        text: "You can also add the exe on system path."
                    }
                ]
            }
        ]

    },
    {
        "title": "Basics",
        "description": "Let’s start with some basic features.",
        "content": [
            {
                "title": "Global and local variables with var",
                "data": [
                    {
                        "text": "Mark your territory — create variables scoped to their plains."
                    },
                    {
                        "code": "var bestLanguageInTheWorld << \"Zumbra\";\nvar zumbra << \"The best language in the world\";"
                    }
                ]
            },
            {
                "title": "Custom assignment operator <<",
                "data": [
                    {
                        "text": "Bind with strength — assign values in true Zumbra fashion."
                    },
                    {
                        "text": "So, you laughed about my math skills, so let’s see who is laughing now, where are your “=”??, not here baby."
                    },
                    {
                        "code": "var skyIs << \"Blue\";\nskyIs << \"Dark Blue\";"
                    }
                ]
            },
            {
                "title": "See outputs with show",
                "data": [
                    {
                        "text": "Make the zebra speak — print values to the terminal."
                    },
                    {
                        "code": "show(\"Zumbra\"); //output: Zumbra"
                    }
                ]
            },
            {
                "title": "Arithmetic and logical operations (+, -, *, /, < , > , ==, <=, >=)",
                "data": [
                    {
                        "text": "Master the dance of numbers and truths."
                    },
                    {
                        "code": "1+1;\n2/1;\n10-1;\n5*5;\n5 == 1;\n10 < 11;\n8 > 4;\n69 >= 69;\n10 <= 10;"
                    }
                ]
            }
        ]
    },

    {
        "title": "Types",
        "description": "No, we aren’t an OOP language... not yet. But you can work with many different types. In this section, we'll explore some of them.",
        "content": [
            {
                "title": "Integers",
                "data": [
                    {
                        "code": "var ten << 10;"
                    },
                    {
                        "text": "For int parsing you can use toInt() function:"
                    },
                    {
                        "code": "var zumbra << toInt(\"10\");"
                    }
                ]
            },
            {
                "title": "Strings",
                "data": [
                    {
                        "code": "var sky << \"Blue\";"
                    },
                    {
                        "text": "For string parsing you can use toString() function:"
                    },
                    {
                        "code": "var age << toString(10);"
                    }
                ]
            },
            {
                "title": "Booleans",
                "data": [
                    {
                        "code": "var ok << true;"
                    },
                    {
                        "text": "For boolean parsing you can use toBool() function:"
                    },
                    {
                        "code": "var notOk << toBool(0); //false"
                    }
                ]
            },
            {
                "title": "Float",
                "data": [
                    {
                        "code": "var kilo << 13.5;"
                    },
                    {
                        "text": "For float parsing you can use toFloat() function:"
                    },
                    {
                        "code": "var money << toFloat(1); //1.0"
                    }
                ]
            }
        ]
    },
    {
        "title": "Arrays",
        "description": "Arrays are like herds — groups of elements moving together. With arrays, you can collect, organize, and manipulate data with grace and speed. Let's learn how to gather and guide your own herds!",
        "content": [
            {
                "title": "Creating an array",
                "data": [
                    {
                        "code": "var arr << [1];"
                    }
                ]
            },
            {
                "title": "Pick value by position",
                "data": [
                    {
                        "code": "var arr << [1, 2, 3];\nshow(arr[0]); //output: 1"
                    }
                ]
            },
            {
                "title": "Add some value inside the array",
                "data": [
                    {
                        "code": "var arr << [1, 2, 3];\naddToArrayStart(arr, 0);\naddToArrayEnd(arr, 5);\nshow(arr); //output: [0,1,2,3,5]"
                    },
                    {
                        "text": "It’s quite easy to see what each function does, it's in their names:\n\n- addToArrayStart: Add values to the beginning of an array.\n- addToArrayEnd: Add values to the end of an array."
                    }
                ]
            },
            {
                "title": "Remove some value from the array",
                "data": [
                    {
                        "code": "var arr << [1, 2, 3];\nremoveFromArray(arr, 1);\nshow(arr); //output: [1,3]"
                    },
                    {
                        "text": "Remove the value based on the index."
                    }
                ]
            },
            {
                "title": "IndexOf",
                "data": [
                    {
                        "code": "var arr << [1, 2, 3];\nshow(indexOf(arr, 3)); //output: 2\nshow(indexOf(arr, 5)); //output: -1"
                    }
                ]
            },
            {
                "title": "Extras",
                "data": [
                    {
                        "code": "var arr << [1, 2, 3];"
                    },
                    {
                        "text": "Get the min and max values from an array:"
                    },
                    {
                        "code": "show(min(arr)); //output: 1\nshow(max(arr)); //output: 3"
                    },
                    {
                        "text": "Get the size of an array, or a string:"
                    },
                    {
                        "code": "show(sizeOf(arr)); //output: 3"
                    },
                    {
                        "text": "Get the first element:"
                    },
                    {
                        "code": "show(first(arr)); //output: 1"
                    },
                    {
                        "text": "Get the last element:"
                    },
                    {
                        "code": "show(last(arr)); //output: 3"
                    },
                    {
                        "text": "Get all values but not the first one:"
                    },
                    {
                        "code": "show(allButFirst(arr)); //output: [2,3]"
                    },
                    {
                        "text": "Organizing arrays:"
                    },
                    {
                        "code": "show(organize([2,3,9,1,13,5,5], \"desc\")); //output: [13, 9, 5, 5, 3, 2, 1]\nshow(organize([2,3,9,1,13,5,5], \"asc\")); //output: [1, 2, 3, 5, 5, 9, 13]"
                    },
                    {
                        "text": "Summing arrays:"
                    },
                    {
                        "code": "show(sum([1,2])); //output: 3"
                    }
                ]
            },
        ]
    }
    ,
    {
        "title": "Dicts",
        "description": "Sometimes, it's not enough to have just a list — you need names, maps, and meaning. Here dictionaries allow you to associate keys and values, creating powerful collections of knowledge. Let’s see how to build your own fields of wisdom.",
        "content": [
            {
                "title": "Creating a dict",
                "data": [
                    {
                        "code": "var dict << {\"key\": \"value\", \"a\": \"vowel\"};"
                    }
                ]
            },
            {
                "title": "Pick value by key",
                "data": [
                    {
                        "code": "var dict << {\"key\": \"value\", \"a\": \"vowel\"};\nshow(dict[\"key\"]); //output: \"value\""
                    }
                ]
            },
            {
                "title": "Add some value inside the dict",
                "data": [
                    {
                        "code": "var dict << {\"key\": \"value\", \"a\": \"vowel\"};\naddToDict(dict, \"a\", \"vowel\");\nshow(dict); //output: {\"key\": \"value\", \"a\": \"vowel\"}"
                    },
                    {
                        "text": "This function has 3 parameters: the dict, the key and the value."
                    }
                ]
            },
            {
                "title": "Remove some value from the dict",
                "data": [
                    {
                        "code": "var dict << {\"key\": \"value\", \"a\": \"vowel\"};\ndeleteFromDict(dict, \"key\");\nshow(dict); //output: {\"a\": \"vowel\"}"
                    },
                    {
                        "text": "Remove the value based on the key."
                    }
                ]
            },
            {
                "title": "Get dict values",
                "data": [
                    {
                        "code": "var a << {\"Lucas\":2, \"João\":39};\nshow(dictValues(a)); //output: [2, 39]"
                    }
                ]
            },
            {
                "title": "Get dict keys",
                "data": [
                    {
                        "code": "var a << {\"Lucas\":2, \"João\":39};\nshow(dictKeys(a)); //output: [\"Lucas\", \"João\"]"
                    }
                ]
            },
            {
                "title": "Get value from dict using function",
                "data": [
                    {
                        "code": "var a << {\"a\":\"v\", \"b\":\"o\"};\nshow(getFromDict(a, \"a\")); //output: \"v\""
                    }
                ]
            }
        ]
    }
    ,
    {
        "title": "Functions",
        "description": "In the world of Zumbra, functions are your magic spells. They let you define reusable actions, organize your code, and command the flow of your programs. It’s time to craft your own spells with fct.",
        "content": [
            {
                "title": "Creating a function… sorry, my fault a fct",
                "data": [
                    {
                        "code": "var function << fct(x){ return x; };"
                    },
                    {
                        "text": "Zumbra uses the word fct for function. You need a var to create a function."
                    }
                ]
            },
            {
                "title": "Returns are non-mandatory",
                "data": [
                    {
                        "code": "var function << fct(x){ x; };\nshow(function(1)); // output: 1"
                    }
                ]
            }
        ]
    },
    {
        "title": "Input and Output",
        "description": "Give Zumbra a voice (figuratively, of course) using show() and input().",
        "content": [
            {
                "title": "Using show",
                "data": [
                    {
                        "code": "show(\"Zumbra\"); //output: Zumbra."
                    }
                ]
            },
            {
                "title": "Using input",
                "data": [
                    {
                        "code": "show(\"What is the best animal?\");\nvar answer << input(); // input: Zebra\nshow(answer); //output: Zebra"
                    }
                ]
            }
        ]
    },
    {
        "title": "Conditionals",
        "description": "In Zumbra, every journey is shaped by the choices you make. With if and else, you command your code to follow different paths, reacting to the conditions of the wild. Master conditionals to guide your programs through every fork in the road.",
        "content": [
            {
                "title": "The if",
                "data": [
                    {
                        "code": "var ok << false;\nif (true) { ok << true }\nshow(ok); // output: true"
                    }
                ]
            },
            {
                "title": "The else",
                "data": [
                    {
                        "code": "var ok << false;\nif (false) { ok << true } else { ok << false }\nshow(ok); // output: false"
                    }
                ]
            },
            {
                "title": "Logical operators (and / or)",
                "data": [
                    {
                        "text": "You can combine conditions using and and or."
                    },
                    {
                        "code": "var result << false;\nif (true and true) { result << true }\nshow(result); // output: true"
                    },
                    {
                        "code": "var result << false;\nif (true or false) { result << true }\nshow(result); // output: true"
                    }
                ]
            }
        ]
    }
    ,
    {
        "title": "Loops",
        "description": "A zebra doesn't stop running just because it feels like it. In Zumbra, while lets your code keep running — until you tell it otherwise!",
        "content": [
            {
                "title": "Using while",
                "data": [
                    {
                        "code": "var x << 0;\nwhile (x < 3) {\n     x << x + 1; // add 1 to x in each iteration\n};\nshow(x); // output: 3"
                    }
                ]
            }
        ]
    },
    {
        "title": "Extras",
        "description": "A few more tricks to become a true Zumbra master.",
        "content": [
            {
                "title": "Imports",
                "data": [
                    {
                        "text": "You can split your Zumbra code into multiple files and import them to organize your project."
                    },
                    {
                        "code": "import \"file.zum\";"
                    },
                    {
                        "text": "Just call import with the file path as a string, and the code inside will be loaded and executed."
                    }
                ]
            },
            {
                "title": "Get current date and time",
                "data": [
                    {
                        "code": "var a << date();\n\nshow(a);\nshow(a.hour);\nshow(a.minute);\nshow(a.second);\nshow(a.day);\nshow(a.month);\nshow(a.year);"
                    },
                    {
                        "text": "The `date()` function returns an object with the current date and time.\nYou can access:\n- `a.hour`, `a.minute`, `a.second`\n- `a.day`, `a.month`, `a.year`"
                    }
                ]
            }
        ]
    },

    {
        "title": "Messaging",
        "description": "Sometimes, your code needs to communicate with the outside world. With Zumbra, you can send emails or WhatsApp messages using simple built-in functions. Just configure them properly and you're ready to share your ideas.",
        "content": [
            {
                "title": "Send an Email",
                "data": [
                    {
                        "code": "show(sendEmail({\n  \"subject\": \"Zumbra\",\n  \"body\": \"Zumbra is amazing, you need to test!\",\n  \"sender\": \"your_email@gmail.com\",\n  \"to\": \"the_one_who_will_receive@gmail.com\",\n  \"app_password\": \"0000 0000 0000 0000\"\n}));"
                    },
                    {
                        "text": "📧 *Gmail Configuration Tip:*\nTo send emails via Zumbra, you must generate an **App Password** from your Google Account.\n\nSteps:\n1. Go to: https://myaccount.google.com/apppasswords\n2. Choose 'Mail' and your device name\n3. Copy the generated password and use it in `app_password`"
                    }
                ]
            },
            {
                "title": "Send a WhatsApp Message",
                "data": [
                    {
                        "code": "show(sendWhatsapp({\n  \"sid\": \"*****************************\", // Twilio Account SID\n  \"auth\": \"***************************\", // Twilio Auth Token\n  \"senderPhone\": \"11111111111\",\n  \"receiverPhone\": \"558399999999\",\n  \"message\": \"Hello from Zumbra!\"\n}));"
                    },
                    {
                        "text": "📱 *Twilio Configuration Tip:*\nTo send WhatsApp messages:\n1. Create a [Twilio account](https://www.twilio.com/whatsapp)\n2. Get your `Account SID` and `Auth Token`\n3. Use the **sandbox sender number** or a verified business sender number\n\nExample Sender: `+14155238886` (Twilio Sandbox)\nExample Receiver: `+558399999999` (with country code)"
                    }
                ]
            }
        ]
    },
    {
        "title": "Math",
        "description": "Math is the language of logic, precision, and the universe. Zumbra brings math to your fingertips with simple and powerful tools. Let's explore how to solve equations and work with numbers!",
        "content": [
            {
                "title": "Solve a quadratic equation using Bhaskara",
                "data": [
                    {
                        "code": "show(bhaskara(2, 5, -3)); //output: [0.5, -3]"
                    },
                    {
                        "text": "The `bhaskara(a, b, c)` function solves quadratic equations of the form:\n\n**ax² + bx + c = 0**\n\nIt returns an array with the real roots (if they exist)."
                    }
                ]
            },
            {
                "title": "Generate random integers",
                "data": [
                    {
                        "code": "show(randomInteger(2)); // max: 2, min: 0\nshow(randomInteger()); // max: 10, min: 0\nshow(randomInteger(2, 10)); // max: 10, min: 2"
                    },
                    {
                        "text": "`randomInteger(min, max)` returns a random **whole number** between `min` and `max` (inclusive).\nIf no values are passed, defaults are `min = 0` and `max = 10`."
                    }
                ]
            },
            {
                "title": "Generate random floats",
                "data": [
                    {
                        "code": "show(randomFloat(1, 3)); // max: 3, min: 1\nshow(randomFloat(1)); // max: 1, min: 0\nshow(randomFloat()); // max: 10, min: 0"
                    },
                    {
                        "text": "`randomFloat(min, max)` returns a **decimal number** between `min` and `max` (exclusive of max).\nLike `randomInteger`, defaults are `min = 0` and `max = 10` when no parameters are provided."
                    }
                ]
            }
        ]
    },
    {
        "title": "Strings",
        "description": "Strings are the voice of your code — carrying messages, labels, and even poetry. With Zumbra, you can easily transform, clean, and format strings to fit your needs. Let's explore how to work with text!",
        "content": [
            {
                "title": "Capitalize the first letter",
                "data": [
                    {
                        "code": "show(capitalize(\"lucas\")); //output: Lucas"
                    },
                    {
                        "text": "Makes the first letter uppercase and the rest lowercase. Perfect for names and titles."
                    }
                ]
            },
            {
                "title": "Convert to lowercase",
                "data": [
                    {
                        "code": "show(toLowercase(\"LUCAS\")); //output: lucas"
                    },
                    {
                        "text": "Converts all letters to lowercase."
                    }
                ]
            },
            {
                "title": "Convert to uppercase",
                "data": [
                    {
                        "code": "show(toUppercase(\"lucas\")); //output: LUCAS"
                    },
                    {
                        "text": "Converts all letters to uppercase."
                    }
                ]
            },
            {
                "title": "Remove all whitespaces",
                "data": [
                    {
                        "code": "show(removeWhiteSpaces(\"H  ell o W orl     d\")); //output: HelloWorld"
                    },
                    {
                        "text": "Eliminates all spaces from the string, including in the middle and at the ends."
                    }
                ]
            }
        ]
    }










]