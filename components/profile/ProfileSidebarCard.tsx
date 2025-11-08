'use client';

import Image from 'next/image';

export default function ProfileSidebarCard() {
  return (
    <div className="card mb-3 shadow">
      <div className="card-body d-flex flex-column align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <Image
            src="/img/dogs/image2.jpeg"
            alt="User"
            width={160}
            height={160}
            className="rounded-circle mt-3 mb-3"
          />
        </div>

        <button className="btn btn-primary btn-md mt-3 ">Trocar Foto</button>
      </div>
    </div>
  );
}
