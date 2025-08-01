import { document, console } from 'global';
import '../src/main/webpack/site/main.scss';
import '../.storybook/story-styles.css';

export default {
  title: 'WKND Gallery',
};

export const GalleryStyle = () => new WKNDGallery('cmp-carousel--gallery').markup;

GalleryStyle.story = {
  name: 'Gallery Style',
};

export const GalleryWithNavigation = () => new WKNDGallery('cmp-carousel--gallery').markupWithNavigation;

GalleryWithNavigation.story = {
  name: 'Gallery with Navigation',
};

class WKNDGallery {
  constructor(styleClass) {
    this.styleClass = styleClass;
  }

  get markup() {
    return (
      "<div class='" +
      this.styleClass +
      " cmp-carousel' role='group' aria-label='WKND Adventures Gallery' aria-live='polite' aria-roledescription='carousel' data-cmp-is='carousel'>" +
      "<div class='cmp-carousel__content'>" +
      // Gallery Item 1
      "<div class='cmp-carousel__item cmp-carousel__item--active' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Adventure+1' alt='Mountain Adventure'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>Mountain Adventure</h3>" +
      "<p class='cmp-teaser__description'>Explore the breathtaking mountain trails and discover hidden waterfalls.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Learn More</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Gallery Item 2
      "<div class='cmp-carousel__item' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/50C878/FFFFFF?text=Beach+Escape' alt='Beach Escape'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>Beach Escape</h3>" +
      "<p class='cmp-teaser__description'>Relax on pristine beaches and enjoy the ocean breeze.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Book Now</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Gallery Item 3
      "<div class='cmp-carousel__item' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=City+Explorer' alt='City Explorer'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>City Explorer</h3>" +
      "<p class='cmp-teaser__description'>Discover urban culture and vibrant city life.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Explore</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Gallery Item 4
      "<div class='cmp-carousel__item' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/9B59B6/FFFFFF?text=Forest+Retreat' alt='Forest Retreat'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>Forest Retreat</h3>" +
      "<p class='cmp-teaser__description'>Connect with nature in serene forest settings.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Discover</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Navigation Arrows
      "<button class='cmp-carousel__action cmp-carousel__action--previous' aria-label='Previous slide' data-cmp-hook-carousel='previous'>←</button>" +
      "<button class='cmp-carousel__action cmp-carousel__action--next' aria-label='Next slide' data-cmp-hook-carousel='next'>→</button>" +
      // Navigation Indicators
      "<ol class='cmp-carousel__indicators' role='tablist' aria-label='Choose a slide to display' data-cmp-hook-carousel='indicators'>" +
      "<li class='cmp-carousel__indicator cmp-carousel__indicator--active' role='tab' aria-label='Slide 1' data-cmp-hook-carousel='indicator'>1</li>" +
      "<li class='cmp-carousel__indicator' role='tab' aria-label='Slide 2' data-cmp-hook-carousel='indicator'>2</li>" +
      "<li class='cmp-carousel__indicator' role='tab' aria-label='Slide 3' data-cmp-hook-carousel='indicator'>3</li>" +
      "<li class='cmp-carousel__indicator' role='tab' aria-label='Slide 4' data-cmp-hook-carousel='indicator'>4</li>" +
      "</ol>" +
      "</div>"
    );
  }

  get markupWithNavigation() {
    return (
      "<div class='" +
      this.styleClass +
      " cmp-carousel' role='group' aria-label='WKND Adventures Gallery' aria-live='polite' aria-roledescription='carousel' data-cmp-is='carousel'>" +
      // Navigation Arrows
      "<button class='cmp-carousel__action cmp-carousel__action--previous' aria-label='Previous slide' data-cmp-hook-carousel='previous'>←</button>" +
      "<button class='cmp-carousel__action cmp-carousel__action--next' aria-label='Next slide' data-cmp-hook-carousel='next'>→</button>" +
      "<div class='cmp-carousel__content'>" +
      // Gallery Item 1
      "<div class='cmp-carousel__item cmp-carousel__item--active' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Adventure+1' alt='Mountain Adventure'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>Mountain Adventure</h3>" +
      "<p class='cmp-teaser__description'>Explore the breathtaking mountain trails.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Learn More</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Gallery Item 2
      "<div class='cmp-carousel__item' role='tabpanel' aria-roledescription='slide' data-cmp-hook-carousel='item'>" +
      "<div class='cmp-teaser--gallery'>" +
      "<div class='cmp-teaser'>" +
      "<div class='cmp-teaser__image'>" +
      "<div class='cmp-image'>" +
      "<img class='cmp-image__image' src='https://via.placeholder.com/400x300/50C878/FFFFFF?text=Beach+Escape' alt='Beach Escape'>" +
      "</div>" +
      "</div>" +
      "<div class='cmp-teaser__content'>" +
      "<h3 class='cmp-teaser__title'>Beach Escape</h3>" +
      "<p class='cmp-teaser__description'>Relax on pristine beaches.</p>" +
      "<a href='#' class='cmp-teaser__action-link'>Book Now</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      // Navigation Indicators
      "<ol class='cmp-carousel__indicators' role='tablist' aria-label='Choose a slide to display' data-cmp-hook-carousel='indicators'>" +
      "<li class='cmp-carousel__indicator cmp-carousel__indicator--active' role='tab' aria-label='Slide 1' data-cmp-hook-carousel='indicator'>1</li>" +
      "<li class='cmp-carousel__indicator' role='tab' aria-label='Slide 2' data-cmp-hook-carousel='indicator'>2</li>" +
      "</ol>" +
      "</div>"
    );
  }
} 