const Header = () => {
  const header = [
    {
      name: "home",
      link: "#home"
    },
    {
      name: "notes",
      link: "#notes"
    },
    {
      name: "devtips",
      link: "#devtips"
    },
    // {
    //   name: "book",
    //   link: "#book"
    // }
  ]

  const RenderList = () =>{
    return(
      header.map((item, index) => {
        return(
          <li key={index}><a href={item.link}>{item.name}</a></li>
        )
      })
    )
  }

  return(
    <>
      <div className="header">
      <ul className="header__nav">
        <RenderList/>
      </ul>
      </div>
    </>
  )
}

export default Header;
