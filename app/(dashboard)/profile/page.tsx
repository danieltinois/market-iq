'use client';

import ContactSettingsCard from '@/components/profile/ContactSettingsCard';
import ForumSettingsCard from '@/components/profile/ForumSettingsCard';
import ProfileProjectsCard from '@/components/profile/ProfileProjectsCard';
import ProfileSidebarCard from '@/components/profile/ProfileSidebarCard';
import UserSettingsCard from '@/components/profile/UserSettingsCard';

export default function ProfilePage() {
  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Perfil</h3>

      <div className="row mb-4">
        {/* LEFT */}
        <div className="col-lg-4">
          <ProfileSidebarCard />
          <ProfileProjectsCard />
        </div>

        {/* RIGHT */}
        <div className="col-lg-8">
          <UserSettingsCard />
          <ContactSettingsCard />
        </div>
      </div>

      <ForumSettingsCard />
    </div>
  );
}
