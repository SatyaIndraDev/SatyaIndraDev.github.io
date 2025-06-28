import React, { useState } from "react";
import {
    Box,
    Text,
    VStack,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import GitHubCalendar from "react-github-calendar";
import "./calender.css";

// --- OPTIONAL: Provide a static fallback screenshot (upload to your assets or use an external link)
const STATIC_CALENDAR_IMG =
  "https://ghchart.rshah.org/SatyaIndraDev"; // e.g., use https://ghchart.rshah.org/<username>

export const GithubStats = () => {
    const [calendarError, setCalendarError] = useState(false);

    // Filters only last 12 months of contributions for the calendar
    const selectLast12Months = (contributions) => {
        const today = new Date();
        const startTimestamp = new Date(
            today.getFullYear(),
            today.getMonth() - 11,
            1
        ).getTime();
        const endTimestamp =
            new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

        return contributions.filter((day) => {
            const contributionTimestamp = new Date(day.date).getTime();
            return (
                contributionTimestamp >= startTimestamp &&
                contributionTimestamp <= endTimestamp
            );
        });
    };

    // Handlers to open respective GitHub widgets in a new tab
    const handleCalendarClick = () => {
        window.open('https://github.com/SatyaIndraDev', '_blank');
    };
    const handleStreakClick = () => {
        window.open(
            'https://github-readme-streak-stats.herokuapp.com/?user=SatyaIndraDev&theme=default&hide_border=true&background=e0eff8',
            '_blank'
        );
    };
    const handleLanguageClick = () => {
        window.open(
            'https://github-readme-stats.vercel.app/api/top-langs/?username=SatyaIndraDev&layout=compact&langs_count=4&bg_color=e0eff8&hide_border=true&theme=default',
            '_blank'
        );
    };
    const handleStatsClick = () => {
        window.open(
            'https://github-readme-stats.vercel.app/api?username=SatyaIndraDev&show_icons=true&bg_color=e0eff8&hide_border=true&theme=default',
            '_blank'
        );
    };
    const handleCalendarError = () => setCalendarError(true);

    const bgColor = useColorModeValue("#f8fafc", "#2d3748");

    return (
        <Box pb='50px' id="github-stats">
            {/* --- GITHUB CALENDAR --- */}
            <Heading color='black' fontSize={35}>
                <Text as='span' color='black'>Github</Text> Calendar
            </Heading>

            <VStack mt='70px'>
                <div
                    className="github-calender"
                    onClick={handleCalendarClick}
                    style={{ cursor: 'pointer', width: '100%' }}
                >
                    {calendarError ? (
                        <>
                            <Alert status="warning" borderRadius="8px">
                                <AlertIcon />
                                <Box>
                                    <AlertTitle fontSize="md">GitHub Calendar Unavailable</AlertTitle>
                                    <AlertDescription fontSize="sm">
                                        GitHub's API sometimes limits calendar requests. <br />
                                        <Button
                                            onClick={handleCalendarClick}
                                            variant="link"
                                            colorScheme="blue"
                                            size="sm"
                                            ml="1"
                                        >
                                            Visit my GitHub profile ↗
                                        </Button>
                                    </AlertDescription>
                                </Box>
                            </Alert>
                            {/* --- Optional fallback image --- */}
                            <Box mt={4} textAlign="center">
                                <img
                                    src={STATIC_CALENDAR_IMG}
                                    alt="Static GitHub Contributions Chart"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        background: bgColor,
                                        margin: 'auto',
                                    }}
                                />
                                <Text fontSize="xs" color="gray.500" mt={2}>
                                    (Static fallback image. Click to see live contributions.)
                                </Text>
                            </Box>
                        </>
                    ) : (
                        <GitHubCalendar
                            className="github-calendar-class"
                            transformData={selectLast12Months}
                            username="SatyaIndraDev"
                            color={"green"}
                            blockSize={20}
                            fontSize={20}
                            showColorLegend
                            hideTotalCount
                            onError={handleCalendarError}
                        />
                    )}
                </div>
            </VStack>

            {/* --- GITHUB STATS SECTION --- */}
            <Heading mt="150px" color='black' fontSize={35}>
                <Text as='span' color='black'>Github</Text> Stats
            </Heading>

            <VStack mt='70px' spacing={10}>
                <div className="github-stats" style={{ width: '100%' }}>
                    {/* Streak Stats */}
                    <div
                        id="github-streak"
                        onClick={handleStreakClick}
                        style={{ cursor: 'pointer', marginBottom: '30px' }}
                    >
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=SatyaIndraDev&theme=default&hide_border=true&background=e0eff8"
                            alt="GitHub Streak Stats"
                            id="github-streak-stats"
                            style={{ width: '100%', height: 'auto' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML =
                                    '<div style="display: flex; align-items: center; justify-content: center; height: 200px; background: #f0f0f0; border-radius: 8px; color: #666;">Streak Stats Unavailable</div>';
                            }}
                        />
                    </div>
                    {/* Language Stats */}
                    <div
                        id="github-language"
                        onClick={handleLanguageClick}
                        style={{ cursor: 'pointer', marginBottom: '30px' }}
                    >
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=SatyaIndraDev&layout=compact&langs_count=4&bg_color=e0eff8&hide_border=true&theme=default"
                            alt="Top Languages"
                            id="github-top-langs"
                            style={{ width: '100%', height: 'auto' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML =
                                    '<div style="display: flex; align-items: center; justify-content: center; height: 200px; background: #f0f0f0; border-radius: 8px; color: #666;">Language Stats Unavailable</div>';
                            }}
                        />
                    </div>
                    {/* General Stats */}
                    <div
                        id="github-streak-status"
                        onClick={handleStatsClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=SatyaIndraDev&show_icons=true&bg_color=e0eff8&hide_border=true&theme=default"
                            alt="GitHub Stats"
                            id="github-stats-card"
                            style={{ width: '100%', height: 'auto' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML =
                                    '<div style="display: flex; align-items: center; justify-content: center; height: 200px; background: #f0f0f0; border-radius: 8px; color: #666;">GitHub Stats Unavailable</div>';
                            }}
                        />
                    </div>
                </div>
            </VStack>
        </Box>
    );
};
