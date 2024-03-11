
//====================================[Reading] Hook concept in ReactJS=========================

// HOOK: 
// Hooks are functions that allow you to "connect" React state and lifecycle to components using functions. 
// With Hooks you can use state and lifecycles without using ES6 classes

// useEffect:
// - Hooks are functions that allow you to "connect" React state and lifecycle to components using functions.
// With Hooks you can use state and lifecycles without using ES6 classes. Take a look at the following example of the useState hook.
// - useEffect(componentDidMount, componentDidUpdate, and componentWillUnmount) and combined into a single function.
// - Effect hooks can return a function, which will be called to perform cleanup tasks, similar to componentWillUnmount().

// Example useEffect: 
// useEffect(() => {
//   const id = setInteval(() => setCount(count + 1), 100)
 
//   == Trả về một hàm để xóa inteval==
//   return () => clearInteval(id)
// })

// NOTE: 
// In the same component, you can use as many useStates and useEffects as you want. 
// But it is mandatory that these hooks be placed at the beginning of the function, and not in if, switch, for loop, while, or in nested functions.

//Some points to note:
// * When using useEffect to get data, you need to check whether the data exists or not. Otherwise, the function will send requests continuously.
// * The second parameter of the useEffect() function can be used to specify that the function should be executed only when the variable changes its value.

// OverAll:
// - Hooks là một bổ sung mới trong React 16.8.
// • Hooks là những hàm cho phép “kết nối” React state và
// lifecycle vào các components sử dụng hàm.
// • Với Hooks bạn có thể sử dụng state và lifecycles mà không
// cần dùng ES6 Class
// • Lợi ích của hook
// • Khiến các component trở nên gọn nhẹ hơn
// • Giảm đáng kể số lượng code, dễ tiếp cận
// • Cho phép chúng ta sử dụng state ngay trong function
// component

// - Tại sao sử dụng Hook?
// Sau một thời gian làm việc với React, thông thường chúng ta
// sẽ bắt gặp một trong số các vấn đề sau:
// • “Wrapper hell” các component được lồng (nested) vào nhau
// nhiều tạo ra một DOM tree phức tạp.
// • Component quá lớn.
// • Sự rắc rối của Lifecycles trong clas

// ======================================== [Bài đọc] State Hook =================================================

// - Hook là gì? 
// Hook là một hàm đặc biệt cho phép bạn sử dụng các tính năng của React (mà không cần phải tạo class). 
// Ví dụ, useState là một hook cho phép bạn thêm React state vào function components. 
// Chúng ta sẽ tìm hiểu các hook còn lại trong các bài sau.

// - Khi nào tôi nên dùng hook? 
// Nếu bạn viết một function component và nhận ra cần thêm một số state vào chúng, trước đây bạn cần phải chuyển nó thành một class. 
// Bây giờ bạn có thể sử dụng hook bên trong function component đã sẵn có.

//NOTE: 
// Khi chúng ta khai báo một biến state với useState. Nó trả về một cặp – mảng có 2 phần tử. Phần tử đầu tiên là giá trị hiện tại, phần tử thứ hai là hàm cập nhật giá trị đó. 
// Sử dụng [0] and [1] để truy cập chúng thì dễ gây hoang mang bởi vậy chúng có ý nghĩa nhất định. Đây là lý do chúng ta dùng array destructuring.
// Bạn không cần thiết phải sử dụng nhiều biến state. Biến state có thể chứ dữ liệu dạng đối tượng và mảng.
// Vì vậy bạn có thể nhóm các dữ liệu liên quan với nhau vào cùng một biến. Tuy nhiên, không giống như this.setState trong class, cập nhật biến state luôn luôn thay thế mà không trộn chúng lại (giống như setState).

// NOTE :
// • Là một hook cơ bản của reactjs version > 16.8.
// • Giúp chúng ta có thể dùng state trong functional
// component.
// • Input: initialState (giá trị hoặc function)
// • Output: một mảng có 2 phần tử tương ứng cho state và
// setState. 


// ===================================== [Bài đọc] Effect Hook =======================================================

// Effect Hook cho phép thực hiện side effect bên trong các function:

// Examples:
//import React, { useEffect, useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
 
//   // Tương tự như componentDidMount và componentDidUpdate:
//   useEffect(() => {    
//       // Cập nhập document title sử dụng browser API    
//       document.title = `You clicked ${count} times`;  });
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default App;

// NOTE:

// -Có 2 loại side effect phổ biến trong React component: loại không cần cleanup, và loại cần. Cùng phân biệt 2 loại này kỹ hơn.
// + Effect không cần Cleanup: 
// Đôi lúc, chúng ta muốn chạy một vài đoạn code sau khi React đã cập nhập DOM. Network request, tự ý thay đổi DOM, và logging là những ví dụ điển hình của effect không cần cleanup. 
// Chúng ta gọi như vậy vì có thể chạy chúng và quên ngay lập tức. Hãy so sánh class và Hook cho phép thực hiện side effect như thế ra sao.
// Ví dụ sử dụng Classes:
// Trong React class components, phương thức render không được phép tạo ra side effect. Nó sẽ là quá sớm — chúng ta thường chỉ muốn chạy effect sau khi React đã cập nhập DOM. 
// Đó là lý do tại sao trong React class, chúng ta đặt side effect bên trong componentDidMount và componentDidUpdate. Quay lại ví dụ, đây là React counter class component sẽ cập nhập document title ngay sau khi React thay đổi DOM:

// Example: 
// import React from "react"
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
 
// componentDidMount() {    
//   document.title = `You clicked ${this.state.count} times`;  
// }  
// componentDidUpdate() {    
//   document.title = `You clicked ${this.state.count} times`;  
// }

// render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
// export default App;


// - useEffect đã làm gì? Bằng cách sử dụng Hook này, chúng ta nói với React rằng component của chúng ta cần thực hiện một việc gì đó sau khi render. 
// React sẽ ghi nhớ hàm bạn truyền vào (chúng tôi thích gọi nó là “effect”), và sau đó gọi lại hàm này sau khi DOM đã update. 
// Trong effect này, chúng ta đổi document title, chúng ta cũng có thể fetch data hoặc gọi một số API khác.

// - useEffect chạy sau tất cả những lần render? Đúng! Theo mặc định, nó chạy sau lần render đầu tiên và mỗi lần update. 
// Thay vì nghĩ theo hướng “mounting” và “updating”, bạn sẽ thấy dễ hiểu hơn nếu nghĩ theo kiểu “sau khi render”. React đảm bảo DOM đã được update trước khi chạy effect.

// Effect cần Cleanup:
//  - Ở trên, chúng ta đã bàn về những side effect không cần cleanup. Tuy nhiên, một vài effect cần có. Ví dụ, chúng ta muốn thiết lập các subscription cho vài data source bên ngoài. 
// Tình huống đó, clean up là rất quan trọng để không xảy ra memory leak! Cùng so sánh cách làm giữa class và Hook

// Example:
// import React from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOnline: null };
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }
 
//   componentDidMount() {
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

//   handleStatusChange(status) {
//     this.setState({
//       isOnline: status.isOnline
//     });
//   }

//   render() {
//     if (this.state.isOnline === null) {
//       return 'Loading...';
//     }
//     return this.state.isOnline ? 'Online' : 'Offline';
//   }
// }
// export default App;


// NOTE: 

// - Chúng ta đã học useEffect cho phép chúng ta thực hiện nhiều kiểu side effect sau khi component được render. 
// Một vài effect cần cleanup nó sẽ return một function:
// Example:
// useEffect(() => {
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//   return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//   };
//});

// - Một vài effect khác có thể không cần cleanup, thì không cần return gì cả.
// Example: 
// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// });


// SUMMERY: 
// • useEffect là một hook trong React Hooks cho phép chúng
// ta làm việc với các life cycle ở functional component.
// • useEffect hook là của 3 phương thức componentDidMount,
// componentDidUpdate, và componentWillUnmount kết hợp
// lại với nhau.
// • useEffect cho phép chúng ta xử lý các logic trong các vòng
// đời của component và được gọi mỗi khi có bất cứ sự thay
// đổi nào trong một componnet.


// NOTE: 
// - Có thể điều khiển useEffect bằng câu lệnh điều kiện. Đây là tham số thứ hai của hàm useEffect().
// ● Tham số thứ hai của useEffect là một mảng
// ● Mảng này cho biết rõ chỉ gọi useEffect() khi giá trị phần tử trong
// mảng thay đổi.
// Ví dụ:
//  useEffect(() => {
//  console.log('useEffect has been called!');
//  setFullName({ name: 'New Name', familyName: 'CodeGym' });
//  }, [fullName.name]);
// Như vậy hàm useEffect() chỉ được gọi 2 lần: 1 lần khi render
// components, 1 lần khi set name thành "New name".


// NOTE: 

// - Một trong những vấn đề đã liệt kê ở động lực tạo ra Hooks là các phương thức lifecycle của class thường chứa những logic không liên quan với nhau, còn những logic đáng lý phải nằm gần nhau lại nằm ở các phương thức khác nhau. 
// Đây là component kết hợp counter và friend status từ ví dụ ở trên

// class FriendStatusWithCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0, isOnline: null };
//       this.handleStatusChange = this.handleStatusChange.bind(this);
//     }
   
//     componentDidMount() {
//       document.title = `You clicked ${this.state.count} times`;
//       ChatAPI.subscribeToFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       );
//     }
   
//     componentDidUpdate() {
//       document.title = `You clicked ${this.state.count} times`;
//     }
   
//     componentWillUnmount() {
//       ChatAPI.unsubscribeFromFriendStatus(
//         this.props.friend.id,
//         this.handleStatusChange
//       );
//     }
   
//     handleStatusChange(status) {
//       this.setState({
//         isOnline: status.isOnline
//       });
//     }
  

// - Để ý cái logic của document.title đang nằm ở componentDidMount và componentDidUpdate. Logic của subscription thì cũng nằm ở componentDidMount và componentWillUnmount. Và componentDidMount chứa code cả hai.Như vậy hook đã giải quyết vấn đề này như thế nào? Nếu như bạn có thể sử dụng State Hook nhiều lần, bạn cũng có thể sử dụng nhiều effect. 
// Nó cho phép tách những logic không liên quan ra thành những effect khác nhau:

//function FriendStatusWithCounter(props) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {    document.title = `You clicked ${count} times`;
//     });
   
//     const [isOnline, setIsOnline] = useState(null);
//     useEffect(() => {    function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//       }
   
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });
//   }

// - Trong class component, chúng ta cần thêm componentDidUpdate để xử lý tình huống này:

// componentDidMount() {
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
 
//   componentDidUpdate(prevProps) {
//     // Unsubscribe friend.id trước đó
//     ChatAPI.unsubscribeFromFriendStatus(
//       prevProps.friend.id,
//       this.handleStatusChange    );

//     // Subscribe friend.id mới
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

// - Đây là phiên bản sử dụng Hook:
// function FriendStatus(props) {
//     // ...
//     useEffect(() => {
//       // ...
//       ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//       };
//     });

// SPECIAL NOTE:

// useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]); // Chỉ re-run effect nếu giá trị count thay đổi

// - Trong ví dụ ở trên, chúng ta truyền vào [count] như một tham số thứ 2. 
// Nó nghĩa là gì? Nếu count là 5, rồi sau đó component re-render với count vẫn bằng 5, React sẽ so sánh [5] từ lần render trước và [5] với lần render hiện tại. 
// Vì tất cả giá trị trong mảng bằng nhau (5 === 5), React sẽ bỏ qua effect. Đó là cách chúng ta tối ưu

// - Khi chúng ta render với count thành 6, React sẽ so sánh các giá trị trong [5] từ lần render trước với các giá trị trong [6] lần render hiện tại. 
// Ở lần này, React sẽ gọi lại effect vì 5 !== 6. Nếu có nhiều giá trị bên trong array, React sẽl re-run effect nếu một trong các giá trị đó khác với lần trước.


// - Effect cũng làm việc tương tự với quá trình cleanup:
// useEffect(() => {
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }
 
//   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//   return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//   };
// }, [props.friend.id]); // Chỉ re-subscribe nếu props.friend.id bị thay đổi




// ========================================== CUSTOM HOOK =====================================================

// - CUSTOM HOOK:
// • Custom Hooks là những hooks mà do lập trình viên tự định nghĩa với mục đích thực hiện một chức năng nào đó.
// • Thường được sử dụng để chia sẻ logic giữa các components.
// • React cũng định nghĩa các hooks như useState, useEffect, useContext,... cho phép chúng ta làm việc dễ dàng hơn.
// • Khi đặt tên một custom hooks phải có từ khóa use ở đầu, ví dụ như: useClick(), useClock(), useQuery().

// - Hai component cùng sử dụng một Hook có chia sẻ state với nhau không? Không. 
// Các Hook là những cơ chế để sử dụng lại logic có trạng thái (ví dụ như cài đặt một sự theo dõi và ghi nhớ giá trị), 
// nhưng mỗi lần bạn sử dụng một Hook, tất cả state và effect bên trong sẽ hoàn toàn được cô lập.

//====================================================    USE MEMO        ===========================================

// useMemo
// • Giúp ta kiểm soát việc được render dư thừa của các component con
// • Khá giống với hàm shouldComponentUpdate trong LifeCycle.
// • Bằng cách truyền vào 1 tham số thứ 2 thì chỉ khi tham số này thay đổi thì thằng useMemo mới được thực thi.



//============================================ LUU Y KHI LAM VIEC VOI HOOK  ======================================================


// - Lưu ý khi làm việc với Hook:
// • Trong cùng một component, chúng ta có thể sử dụng bao nhiêu useState và useEffect tùy ý nhưng các hook phải gọi ở
// trên cùng của function, không được nằm trong vòng lặp,
// khu vực điều kiện, hay các function con
// • Hook chỉ sử dụng trong functional component
// • Khi sử dụng useEffect để lấy dữ liệu, cần kiểm tra dữ liệu đã tồn tại hay chưa. Nếu không thì hàm sẽ gửi request liên tục


//==========================================================    TONG KET ======================================================

// - Tổng kết:
// • React Hooks là các hàm đặc biệt cho phép sử dụng các tính
// năng của React (mà không cần phải tạo class). Ví dụ, useState là
// một hook cho phép thêm React state vào function components.
// • useState hook cho phép chúng ta khai báo local state trong
// Function Component cách mà trước để chỉ dùng cho Class Component.
// • useEffect hook để quản lý vòng đời của của một component và
// nó phục vụ chúng ta sử dụng trong functional component thay
// vì các lifecycle như trước đây trong class component.
// • Custom Hooks là những hooks mà do lập trình viên tự định
// nghĩa với mục đích thực hiện một chức năng nào đó



// ======================================  [Practice] Implement useState ========================================

// import React, {useState} from "react";

// function App() {
//     const [counter, setCounter] = useState(100)
//     return (
//         <div>
//             <p>You clicked {counter} times</p>
//             <button onClick={() => setCounter(counter => counter + 1)}>Click Me</button>
        
//         </div>

//     )

// }
// export default App;


// ===================================  [Thực hành] Triển khai useEffect  ===============================================================

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [options, setOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');

//   useEffect(() => {
//     // Simulating fetching options from an API after component mounts
//     const fetchedOptions = [
//       { value: 'apple', label: 'Apple' },
//       { value: 'banana', label: 'Banana' },
//       { value: 'orange', label: 'Orange' },
//     ];

//     setOptions(fetchedOptions);
//   }, []);

//   const handleChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedOption} onChange={handleChange}>
//         <option value="">Select an option</option>
//         {options.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>
//       <p>Selected option: {selectedOption}</p>
//     </div>
//   );
// }

// export default App;


// ==================================  SPACE -- X ===================================



// import React, {useEffect, useState} from "react";
// const courses = ["JavaScript", "Java", "Ruby", "Python", "C#", "C++", "PHP"]
// function App() {
//   const [data, setData] = useState([])
//   const [selectedValue, setSelectedValue] = useState('JavaScript');
//   useEffect(()=> {
//     const fetchData = [...courses];
//     setData(fetchData)

//   },[])

//   const handleChangeSelect =(e)=> {
//     setSelectedValue(e.target.value)

//   }

//   return (
//     <div>
//       <h1>Khoa Hoc:</h1>  
//       <select value={selectedValue} onChange={handleChangeSelect}>
//         {data.map(item => 
//           <option  key={item}>{item}</option>
//         )}
//       </select>
//       <h3>Your selected: {selectedValue}</h3>
//     </div>
//   )
// }
// export default App;


// ================================== SPACE - X ====================================

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once after the component mounts

//   return (
//     <div>
//       {data ? (
//         <div>
//           {/* Render the data here */}
//           {/* Example: */}
//           <p>Data: {data}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;

//================================================ SPACE - X ================================

// import React, {useEffect, useState} from "react";

// const App =()=> {
//   const [datas, setData] = useState([]);

//   useEffect(()=> {
//     const fetchData = async()=> {
//       try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos')
//         const getData = await response.json();
//         setData(getData)
//         console.log(getData)

//       } catch(error) {
//         console.error("Error fetch data", error)
//       }
//     }
//     fetchData()

//   }, [])

//   return (
//     <div>
//       {datas ?
//         <div className="photos">
//         {datas.map((data) => (
//           <img key={data.id} src={data.url} alt={data.title} />
//         ))}
//         </div>:
//         <p>Loading.......</p> 
//       }
//     </div>

//   )
// }
// export default App;

// ========================================= SPACE - X ===================================

// import React, {useEffect, useState} from "react";

// function App() {
//     const [selected, setSelected] = useState("0")
//     const [selectedValue, setSelectedValue] = useState('');
//     useEffect(()=> {
//         switch(selected) {
//             case "0":
//                 setSelectedValue("JavaScript");
//                 break;
//             case "1":
//                 setSelectedValue("Java");
//                 break;
//             case "2":
//                 setSelectedValue("Ruby");
//                 break;
//             case "3":
//                 setSelectedValue("Python");
//                 break;
//             case "4":
//                 setSelectedValue("C#");
//                 break;
//             case "5":
//                 setSelectedValue("C++");
//                 break;
//             default:
//                 alert("Linh is not exist on the earth!!!!");
//                 break;
                
//         }

//     }, [selected])

//     const handleChangeSelect=(event)=> {
//         setSelected(event.target.value)
//     }
//     return (
//         <div>
//             Khoa Hoc:
//             <select  onChange={handleChangeSelect}>
//                 <option value="0" >JavaScript</option>
//                 <option value="1" >Java</option>
//                 <option value="2" >Ruby</option>
//                 <option value="3" >Python</option>
//                 <option value="4" >C#</option>
//                 <option value="5" >C++</option>
//             </select>
//             <h1>Your Select: <span style={{color: "red"}}>{selectedValue}</span></h1>
//         </div>
//     )
// }
// export default App;

// ============================================ SPACE - X ======================================

// import React, {useEffect, useState} from "react";

// const App=()=> {
//     const [option, setOption] = useState("0");
//     const [optionValue, setOptionValue] = useState('');

//     useEffect(()=> {
//         switch(option) {
//             case "0":
//                 setOptionValue("JavaScript");
//                 break;
//             case "1":
//                 setOptionValue("Java");
//                 break;
//             case "2":
//                 setOptionValue("Python");
//                 break;
//             case "3":
//                 setOptionValue("Ruby");
//                 break;
//             case "4":
//                 setOptionValue("C#");
//                 break;
//             case "5":
//                 setOptionValue("C++");
//                 break;
//             default:
//                 alert("This languege is not exist!");
//                 break;
//         }


//     }, [option])

//     const handleChangeOptionValue=(e)=> {
//         setOption(e.target.value)
//     }

//     return (
//         <div>
//             Choose Course:
//             <select onChange={handleChangeOptionValue}>
//                 <option value="0" >JavaScript</option>
//                 <option value="1" >Java</option>
//                 <option value="2" >Python</option>
//                 <option value="3" >Ruby</option>
//                 <option value="4" >C#</option>
//                 <option value="5" >C++</option>
//             </select>
//             <h3>Your select: <span style={{color: "blue"}}>{optionValue}</span></h3>
//         </div>

//     )
// }
// export default App;

// ================================== CUSTOM HOOK ===========================================

// [Thực hành] Triển khai HookCustom:

// The case 1:
// import './App.css'

// import React from 'react';
// import { useClock } from './Clock';

// const App=()=> {
//   const[appearTimes] = useClock();
//   return (
//     <div className='container'>
//       <h4>Current Date</h4>
//       <p className='clock'>{appearTimes.toLocaleTimeString()}</p>
//     </div>

//   )
// }
// export default App;


//===================================================  SPACE -X ======================================================

// The case 2:
// import React from 'react';
// import { useClock } from './Clock';

// const App=()=> {
//   const [time, amPm] = useClock();

//   return (
//     <div>
//       <h3>Current time is :</h3>
//       <p>{time} <span>{amPm}</span></p>

//     </div>
//   )
// }
// export default App;




// ====================================  [Bài tập] Xây dựng component Car selection ===================================

// import React, { useState } from 'react';

// const App =()=> {
//   const [car, setCar] = useState('Ford Mustang GT');
//   const [color, setColor] = useState('white')


//   const handleChangeCar=(e)=> {
//     setCar(e.target.value)

//   }
//   const handleChangeColor=(e)=> {
//     setColor(e.target.value)
    
//   }
//   return (
//     <div className='containr'>
//       <h1>Select your car</h1>
//       <div className='container-car'>
//         <select value={car} onChange={handleChangeCar}>
//           <option value="Ford Mustang GT" >Ford Mustang GT</option>
//           <option value="Lamborghini Aventador" >Lamborghini Aventador</option>
//           <option value="Porsche 911 Carrera2" >Porsche 911 Carrera</option>
//           <option value="Chevrolet Corvette Stinggray" >Chevrolet Corvette Stinggray</option>
//           <option value="BMW M3" >BMW M3</option>
//           <option value="Mercedes-Benz G-Class" >Mercedes-Benz G-Class</option>
//           <option value="Ferrari 488 GTB" >Ferrari 488 GTB</option>
//         </select>

//       </div>
//       <div  className='container-color'>
//         <select value={color} onChange={handleChangeColor}>
//           <option value="White" >White</option>
//           <option value="Black" >Black</option>
//           <option value="Gray" >Gray</option>
//           <option value="Verde British" >Verde British</option>
//           <option value="Rosso Mugello" >Rosso Mugello</option>
//           <option value="Argento Nurburgring" >Argento Nurburgring</option>
//           <option value="Rosso Scuderia" >Rosso Scuderia</option>
//         </select>

//       </div>

//       <h3>you selected  a <span style={{color: "red"}}>{color}</span> - <span style={{color: "blue"}}>{car}</span></h3>

//     </div>

//   )
// }

// export default App;


// ==========================================       [Bài tập] Xây dựng Component Timer =============================

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [seconds, setSeconds] = useState(10);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds - 1);
//     }, 1000);
    
//     return () => clearInterval(intervalId);
   
//   }, []); 

//   useEffect(() => {
//     if (seconds === 0) {
//       clearInterval();
//       alert("Time's up")
//     }
//   }, [seconds]); 

//   return (
//     <div>
//       <h1>Countdown Timer <span style={{color: "blue"}}>{seconds >=0 && seconds}</span></h1>
//     </div>
//   );
// };

// export default App;

//=================================================== SPACE -X ============================================================
import React , {useEffect, useState} from "react";

const App =()=> {
  const [seconds, setSeconds] = useState(10);

  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      setSeconds(seconds => seconds -1)
    }, 1000)
    return ()=> clearTimeout(timeOut)
  },[seconds])
  useEffect(()=> {
    if(seconds === 0) {
      clearTimeout();
      alert("Time is up")
    }

  },[seconds])

  return (
    <div>
      <p>Count down from {seconds >=0 &&seconds}</p>
    </div>
  )
}
export default App;