import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const MangeUser = (props) => {
    return (
        <div className='manage-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className='users-content'>
                <button>Add new users</button>
                <div>
                    table users
                </div>
                <ModalCreateUser></ModalCreateUser>
            </div>
        </div>
    )
}
export default MangeUser;
