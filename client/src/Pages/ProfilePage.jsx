import { Helmet } from 'react-helmet-async'
import Profile from '../Components/profile/Profile'

function ProfilePage() {
    return (
        <div>
            <Helmet>
                <title>Profile - chatapp</title>
            </Helmet>
            <Profile />
        </div>
    )
}

export default ProfilePage