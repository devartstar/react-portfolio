import React from 'react';
import './Timeline.css';
import { Typography } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import WorkIcon from '@material-ui/icons/Work'

const customTimeline = ({ title, children, icon }) => {
    return (
        <Timeline className={'timeline'}>
            {/* Item Header */}
            <TimelineItem className={'timeline_firstitem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'} >{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><Typography variant='h6' className={'timeline_header'}>{title}</Typography></TimelineContent>
            </TimelineItem>

            {children}

            {/* Remaining Items */}
            {/* <TimelineItem>
                <CustomTimelineSeperator />
                <TimelineContent>Code</TimelineContent>
            </TimelineItem> */}
        </Timeline>
    )
}

export const CustomTimelineSeperator = () => (
    <TimelineSeparator className={'seperator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot'} />
        <TimelineConnector />
    </TimelineSeparator>
)
export default customTimeline;
