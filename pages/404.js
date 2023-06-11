import React from 'react'
import Page from '../components/Page'
import Link from 'next/link'

const Page404 = () => {
  return (
    <Page title='Lỗi 404'>
      {/* <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p> */}
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
      </section>
      <div class="link-container">
        <h1>Không tìm thấy trang</h1>
        <Link href={'/'} className='more-link'>
          Back to home
        </Link>
      </div>
    </Page>
  )
}

export default Page404
