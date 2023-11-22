import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { styles } from './CarouselStyle';

const Carousel = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (currentPage === children.length - 1) {
                scrollViewRef.current.scrollTo({ x: 0, animated: true });
                setCurrentPage(0);
            } else {
                const nextPage = currentPage + 1;
                scrollViewRef.current.scrollTo({
                    x: nextPage * Dimensions.get('window').width,
                    animated: true,
                });
                setCurrentPage(nextPage);
            }
        }, 3000);

        return () => {
            clearInterval(scrollInterval);
        };
    }, [currentPage, children.length]);

    const handlePageChange = (event) => {
        event.preventDefault()
        const { nativeEvent } = event;
        const pageIndex = Math.round(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        );
        setCurrentPage(pageIndex);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={handlePageChange}
            >
                {children.map((child, index) => (
                    <View style={styles.pageContainer} key={index}>
                        {child}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {children.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === currentPage && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};



export default Carousel;

