import PropTypes from 'prop-types'

function List(props){

    const category= props.category;
    const itemList = props.items;
    //courses.sort((a,b) => a.course.localeCompare(b.course));

    //const lowerCosts = courses.filter(courses => courses.cost < 30);

    const ListItems = itemList.map(item => <li key={item.course}>
                                                {item.course}: &nbsp;
                                                {item.cost}</li>);

    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{ListItems}</ol>
    </>
    );
}
List.propTypes= {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        course: PropTypes.string,
        cost: PropTypes.number
    })),
}

List.defaultProps ={
    category: "Catergory",
    items:[],
}

export default List;