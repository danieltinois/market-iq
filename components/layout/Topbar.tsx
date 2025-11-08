'use client';

import AlertsDropdown from '../shared/AlertsDropdown';
import MessagesDropdown from '../shared/MessagesDropdown';
import SearchBar from '../shared/SearchBar';
import UserDropdown from '../shared/UserDropdown';

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand bg-white px-4 topbar-modern mb-4">
      <SearchBar />

      <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
        <AlertsDropdown />
        <MessagesDropdown />
        <UserDropdown />
      </ul>
    </nav>
  );
}
