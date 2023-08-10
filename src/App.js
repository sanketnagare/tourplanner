import './App.css';
import Testo from './components/Testo';
import reviews from './TestData';


function App() {
  // const [courses, setCourses] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [category, setCategory] = useState(filterData[0].title);

  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     let response = await fetch(apiUrl);
  //     let output = await response.json();
  //     setCourses(output.data);
  //   } catch (error) {
  //     console.log("Error in fetching the data");
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      {
        loading ? (<Spinner />) : (<Courses courses={courses} category={category}></Courses>)
      } */}


      {/* Testimonial app */}
      <Testo reviews={reviews}></Testo>
    </div>
  );
}

export default App;
