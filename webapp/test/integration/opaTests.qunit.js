sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'trav/proc/travelprocessor/test/integration/FirstJourney',
		'trav/proc/travelprocessor/test/integration/pages/TravelList',
		'trav/proc/travelprocessor/test/integration/pages/TravelObjectPage',
		'trav/proc/travelprocessor/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('trav/proc/travelprocessor') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);