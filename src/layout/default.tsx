const DefaultLayout = (props: { children: any; }) => {
  return(
    <>
      <h1>Header Here</h1>
        {props.children}
      <h1>Footer Here</h1>
    </>
  )
}

export default DefaultLayout;
