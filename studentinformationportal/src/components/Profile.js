export default function Profile(props) {
    return (
        <>
            <table>
                <tr>
                    <td rowSpan={7}>
                        <img
                            className='profile'
                            src={props.stu?.profilePic ? require('../assets/img/' + props.stu.profilePic) : require('../assets/img/1.jpg')}
                            alt="profile"
                        />
                    </td>
                    <td>ID: {props.stu?.studentId || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Full Name: {(props.stu?.firstName || 'N/A') + ' ' + (props.stu?.lastName || 'N/A')}</td>
                </tr>
                <tr>
                    <td>Age: {props.stu?.age || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Course: {props.stu?.course || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Address: {props.stu?.address?.city || 'N/A'}, {props.stu?.address?.country || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Skills: {props.stu?.skills?.join(', ') || 'N/A'}</td>
                </tr>
            </table>
        </>
    );
}
