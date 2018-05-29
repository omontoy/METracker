class PageActions
  constructor: () ->
    $('.trains-details .display-details').on 'click', () =>
      $('.trains-details').toggleClass('hide')

    $('.show-buttons').on 'click', () =>
      @show_buttons()

    $('.close').on 'click', () =>
      @hide_buttons()


  show_buttons: () ->
    $('.show-buttons').removeClass('show')
    $('.buttons-display').removeClass('hide')

  hide_buttons: () ->
    $('.show-buttons').addClass('show')
    $('.buttons-display').addClass('hide')

window.PageActions = PageActions
