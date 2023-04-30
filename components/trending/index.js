import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { MainContainer } from '../layouts/style'
import { TrendingStyles } from './styles'

const toyTrending = [
  {
    image: '/assets/images/trending/titanic.png',
    title: 'Lego@Titanic',
    description: 'Bring the 20th century marvel to life in exquisite detail and scale.'
  },
  {
    image: '/assets/images/trending/starry night.png',
    title: 'Lego@Idea The Starry Night',
    description: 'Bring a masterpiece to life like never before.'
  },
  {
    image: '/assets/images/trending/land rover.png',
    title: 'New Land Rover Classic Defender 90',
    description: 'Put your creativity into gear with thí adventurous set.'
  }
]

const TrendingNow = () => {
  const renderTitle = (title) => {
    return (
      <Box>
        <span>
          {title}
        </span>
      </Box>
    )
  }

  return (
    <TrendingStyles>
      <MainContainer>
        {renderTitle('Trending now')}
        <Grid container spacing={2}>
          {toyTrending.map((toy, index) => (
            <Grid item md={4} key={index}>
              <Box className='grid-box-item'>
                <Box className='grid-image-item'>
                  <img src={toy.image} alt='img' />
                </Box>
                <Box className='grid-information-item'>
                  <Typography className='item-title'>{toy.title}</Typography>
                  <Typography className='item-description'>{toy.description}</Typography>
                  <Button className='item-button'>Shop now</Button>
                </Box>
              </Box>
            </Grid>
          )
          )}
        </Grid>

        {/* <Grid container spacing={spacing}>
          {jobs.map(job => {
            const isMarked = objJobsMarked[job.id] || false;
            const isDisabled = disabledJob.includes(job.id);

            return (
              <Grid item {...grid} key={job.id}>
                <WrapBox
                  className={'job-item' + (isDisabled ? ' disabled' : '')}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isDisabled) {
                      return;
                    }
                    if (onJobClick) {
                      onJobClick(job);
                    }
                  }}
                >
                  <Box display="flex">
                    <h2 className="job-title" title={job.name}>
                      <NextLink {...PATH_JOB.detail(job.slug)}>
                        <a onClick={(e) => {
                          e.preventDefault();
                          handleClickJob(job);
                        }}>{trimWords(job.name, 50, '...', 'character').toLowerCase()}</a>
                      </NextLink>
                    </h2>

                    {job.hot && (
                      <div>
                        <Button
                          height={30}
                          className="btn-hot"
                        >
                          <img alt="" src={getIconSrc('star-active.svg')} className="icon-left" />
                          Hot
                        </Button>
                      </div>
                    )}
                  </Box>

                  <Box flex={1} display="flex" flexDirection="column">
                    <p className="job-type">
                      {getWorkingFormNames(job.recruitmentWorkingForms)}
                    </p>

                    <Box className="job-location" mb={1}>
                      <RiMapPin2Line size={18} className="icon-left" color={palette.text.secondary} />
                      <span>{getRecruitmentAddresses(job.recruitmentAddresses)}</span>
                    </Box>

                    <Box mb={"18px !important"} className="job-salary">
                      <RiMoneyDollarCircleLine size={18} className="icon-left" color={palette.text.secondary} />
                      <span>{renderSalary(job)}</span>
                    </Box>

                    <Box flex={1} display="flex" flexDirection="column" justifyContent="flex-end">
                      <Box className="job-company" display="flex" alignItems="center">
                        {renderCompanyLogo(job.organization)}
                        <Box flex={1} component="span">{job.organization?.name}</Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="job-footer" display="flex" alignItems="center">
                    <Box flex={1} mr={'12px'}>{renderRemainDay(job.endDate)}</Box>
                    <IconButton
                      sx={{ width: 34 }}
                      className="bookmark-btn"
                      onClick={() => handleAddBookmark(job.id)}
                    >
                      {((addingMark || removingMark || checkingMark) && _currentMarkId.current === job.id) ? (
                        <CircularProgress size={18} />
                      ) : (
                        isMarked ? (
                          <RiBookmark2Fill size={18} color={palette.text.active} />
                        ) : (
                          <RiBookmarkLine className="bookmark-notSelected" size={18} color={palette.text.secondary} />
                        )
                      )}
                    </IconButton>
                  </Box>
                </WrapBox>
              </Grid>
            )
          })}
        </Grid> */}

      </MainContainer>
    </TrendingStyles>
  )
}

export default TrendingNow
