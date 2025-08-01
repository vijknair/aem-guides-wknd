/*
 *  Copyright 2024 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/* WKND Gallery JavaScript */

(function() {
    "use strict";

    // Gallery configuration
    var GALLERY_CONFIG = {
        DESKTOP_ITEMS: 4,
        TABLET_ITEMS: 2,
        MOBILE_ITEMS: 1,
        BREAKPOINTS: {
            MOBILE: 767,
            TABLET: 1199
        }
    };

    /**
     * WKND Gallery Component
     * Extends core carousel functionality with custom sliding behavior
     */
    function WKNDGallery(element) {
        this.element = element;
        this.items = [];
        this.currentStartIndex = 0;
        this.visibleItems = 1;
        this.totalItems = 0;
        this.isInitialized = false;

        this.init();
    }

    WKNDGallery.prototype.init = function() {
        // Cache elements
        this.cacheElements();
        
        if (this.items.length === 0) {
            return;
        }

        // Remove indicators for WKND gallery
        this.removeIndicators();

        this.totalItems = this.items.length;
        this.updateVisibleItems();
        this.setupEventListeners();
        this.updateNavigationState();
        this.isInitialized = true;
    };

    WKNDGallery.prototype.cacheElements = function() {
        // Get carousel items
        this.items = Array.from(this.element.querySelectorAll('[data-cmp-hook-carousel="item"]'));
        
        // Get navigation buttons
        this.prevButton = this.element.querySelector('[data-cmp-hook-carousel="previous"]');
        this.nextButton = this.element.querySelector('[data-cmp-hook-carousel="next"]');
        
        // Get indicators
        this.indicators = Array.from(this.element.querySelectorAll('[data-cmp-hook-carousel="indicator"]'));
        
        // Debug logging
        console.log('Gallery Elements Cached:', {
            itemsCount: this.items.length,
            prevButtonFound: !!this.prevButton,
            nextButtonFound: !!this.nextButton,
            indicatorsCount: this.indicators.length
        });
    };

    WKNDGallery.prototype.removeIndicators = function() {
        // Remove the indicators container
        var indicatorsContainer = this.element.querySelector('.cmp-carousel__indicators');
        if (indicatorsContainer) {
            indicatorsContainer.remove();
        }
        
        // Clear the indicators array since we don't need them
        this.indicators = [];
    };

    WKNDGallery.prototype.setupEventListeners = function() {
        // Navigation button events
        if (this.prevButton) {
            this.prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.previous();
            });
        }

        if (this.nextButton) {
            this.nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.next();
            });
        }

        // Indicator events (removed for WKND gallery)
        // this.indicators.forEach((indicator, index) => {
        //     indicator.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         this.goToSlide(index);
        //     });
        // });

        // Window resize event
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    };

    WKNDGallery.prototype.updateVisibleItems = function() {
        var windowWidth = window.innerWidth;
        
        if (windowWidth <= GALLERY_CONFIG.BREAKPOINTS.MOBILE) {
            this.visibleItems = GALLERY_CONFIG.MOBILE_ITEMS;
        } else if (windowWidth <= GALLERY_CONFIG.BREAKPOINTS.TABLET) {
            this.visibleItems = GALLERY_CONFIG.TABLET_ITEMS;
        } else {
            this.visibleItems = GALLERY_CONFIG.DESKTOP_ITEMS;
        }

        this.updateDisplay();
    };

    WKNDGallery.prototype.updateDisplay = function() {
        this.items.forEach((item, index) => {
            var isVisible = index >= this.currentStartIndex && 
                           index < this.currentStartIndex + this.visibleItems;
            
            if (isVisible) {
                item.style.display = 'block';
                item.classList.add('cmp-carousel__item--active');
                item.removeAttribute('aria-hidden');
            } else {
                item.style.display = 'none';
                item.classList.remove('cmp-carousel__item--active');
                item.setAttribute('aria-hidden', 'true');
            }
        });

        // this.updateIndicators(); // Removed for WKND gallery
    };

    WKNDGallery.prototype.updateIndicators = function() {
        // Indicators removed for WKND gallery
        // this.indicators.forEach((indicator, index) => {
        //     var isActive = index >= this.currentStartIndex && 
        //                   index < this.currentStartIndex + this.visibleItems;
        //     
        //     if (isActive) {
        //         indicator.classList.add('cmp-carousel__indicator--active');
        //         indicator.setAttribute('aria-selected', 'true');
        //         indicator.setAttribute('tabindex', '0');
        //     } else {
        //         indicator.classList.remove('cmp-carousel__indicator--active');
        //         indicator.setAttribute('aria-selected', 'false');
        //         indicator.setAttribute('tabindex', '-1');
        //     }
        // });
    };

    WKNDGallery.prototype.updateNavigationState = function() {
        // Update previous button state
        if (this.prevButton) {
            var canGoPrevious = this.currentStartIndex > 0;
            this.prevButton.disabled = !canGoPrevious;
            this.prevButton.classList.toggle('cmp-carousel__action--disabled', !canGoPrevious);
        }

        // Update next button state
        if (this.nextButton) {
            var canGoNext = this.currentStartIndex + this.visibleItems < this.totalItems;
            this.nextButton.disabled = !canGoNext;
            this.nextButton.classList.toggle('cmp-carousel__action--disabled', !canGoNext);
            
            // Debug logging
            console.log('Gallery Navigation State:', {
                currentStartIndex: this.currentStartIndex,
                visibleItems: this.visibleItems,
                totalItems: this.totalItems,
                canGoNext: canGoNext,
                nextButtonFound: !!this.nextButton,
                nextButtonDisabled: this.nextButton ? this.nextButton.disabled : 'N/A'
            });
        }
    };

    WKNDGallery.prototype.next = function() {
        if (this.currentStartIndex + this.visibleItems < this.totalItems) {
            this.currentStartIndex++;
            this.updateDisplay();
            this.updateNavigationState();
        }
    };

    WKNDGallery.prototype.previous = function() {
        if (this.currentStartIndex > 0) {
            this.currentStartIndex--;
            this.updateDisplay();
            this.updateNavigationState();
        }
    };

    WKNDGallery.prototype.goToSlide = function(index) {
        // For mobile, go directly to the slide
        if (this.visibleItems === 1) {
            this.currentStartIndex = index;
        } else {
            // For tablet/desktop, calculate the start index
            this.currentStartIndex = Math.min(index, this.totalItems - this.visibleItems);
        }
        
        this.updateDisplay();
        this.updateNavigationState();
    };

    WKNDGallery.prototype.handleResize = function() {
        var oldVisibleItems = this.visibleItems;
        this.updateVisibleItems();
        
        // If visible items changed, adjust current start index
        if (oldVisibleItems !== this.visibleItems) {
            this.currentStartIndex = Math.min(this.currentStartIndex, this.totalItems - this.visibleItems);
            this.currentStartIndex = Math.max(0, this.currentStartIndex);
            this.updateDisplay();
            this.updateNavigationState();
        }
    };

    // Initialize galleries when DOM is ready
    function initGalleries() {
        var galleryElements = document.querySelectorAll('.cmp-carousel--gallery');
        
        console.log('WKND Gallery: Found', galleryElements.length, 'gallery elements');
        
        galleryElements.forEach(function(element) {
            console.log('WKND Gallery: Initializing gallery for element:', element);
            new WKNDGallery(element);
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalleries);
    } else {
        initGalleries();
    }

    // Initialize on dynamic content changes (for AEM authoring)
    if (window.Granite && window.Granite.author) {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList && node.classList.contains('cmp-carousel--gallery')) {
                        new WKNDGallery(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

})(); 
