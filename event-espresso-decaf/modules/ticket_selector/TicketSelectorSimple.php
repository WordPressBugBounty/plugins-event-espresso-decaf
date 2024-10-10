<?php

namespace EventEspresso\modules\ticket_selector;

use EE_Error;
use EE_Event;
use EE_Ticket;
use EE_Ticket_Selector_Config;
use EventEspresso\core\exceptions\UnexpectedEntityException;
use ReflectionException;

/**
 * Class TicketSelectorSimple
 * there's one ticket, and max attendees is set to one,
 * so if the event is free, then this is a "simple" ticket selector
 * a.k.a. "Dude Where's my Ticket Selector?"
 *
 * @package       Event Espresso
 * @author        Brent Christensen
 * @since         4.9.18
 */
class TicketSelectorSimple extends TicketSelector
{
    protected EE_Ticket_Selector_Config $ticket_selector_config;

    protected EE_Ticket $ticket;


    /**
     * TicketSelectorSimple constructor.
     *
     * @param EE_Ticket_Selector_Config $ticket_selector_config
     * @param EE_Event                  $event
     * @param EE_Ticket                 $ticket
     * @param int                       $max_attendees
     * @param array                     $template_args
     */
    public function __construct(
        EE_Ticket_Selector_Config $ticket_selector_config,
        EE_Event $event,
        EE_Ticket $ticket,
        $max_attendees,
        array $template_args
    ) {
        $this->ticket_selector_config = $ticket_selector_config;
        $this->ticket = $ticket;
        parent::__construct(
            $event,
            [$this->ticket],
            $max_attendees,
            $template_args
        );
    }


    /**
     * sets any and all template args that are required for this Ticket Selector
     *
     * @return void
     * @throws UnexpectedEntityException
     * @throws EE_Error
     * @throws ReflectionException
     */
    protected function addTemplateArgs()
    {
        $this->ticket_rows = 1;
        unset($this->template_args['tickets']);
        $this->template_args['ticket'] = $this->ticket;
        $ticket_selector_row           = new TicketSelectorRowSimple(
            $this->ticket,
            $this->max_attendees,
            $this->template_args['date_format'],
            $this->template_args['event_status']
        );
        $this->template_args['TKT_ID'] = $this->ticket->ID();
        $ticket_selector_row->setupTicketStatusDisplay();
        $this->template_args['ticket_status_display'] = $ticket_selector_row->getTicketStatusDisplay();
        if (empty($this->template_args['ticket_status_display'])) {
            add_filter('FHEE__EE_Ticket_Selector__display_ticket_selector_submit', '__return_true');
        }
        $this->template_args['use_new_form_styles_class'] = $this->ticket_selector_config->useNewFormStyles()
            ? ' tkt-slctr-use-new-form-styles'
            : '';
        $this->template_args['ticket_description']  = $ticket_selector_row->getTicketDescription();
        $this->template_args['template_path']       =
            TICKET_SELECTOR_TEMPLATES_PATH . 'simple_ticket_selector.template.php';
    }
}
