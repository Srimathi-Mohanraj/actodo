import Card from "./components/Card"
import Header from "./components/Header"
import ToDoContainer from "./components/ToDoContainer"
function App() {


  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#FEFBFB] p-10 border rounded-md ">
          <Header />
          {/* Card */}
          <div className="flex justify-between gap-7 my-5 flex-wrap ">
            <Card bgcolor={"#685BAE"} title={"23"} subtitle={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={"July 08"} subtitle={"16:12:20"} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
          </div>
          {/* ToDocontainer */}
          <div>
            <ToDoContainer/>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
