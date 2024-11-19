export default function portalrofile(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                    <img className="profile" src={requestAnimationFrame("../assets/img/img1.jpg")} alt="profile picture"/>
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
        </table>
        </>
    )
}