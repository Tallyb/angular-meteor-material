/**
 * Created by Tallyb on 25-Sep-15.
 */

'use strict';

angular.module('simple-todos').config(
    function ($logProvider, $mdThemingProvider) {

        // Enable log
        $logProvider.debugEnabled(true);

        //configure material palettes colors
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

    });


