using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sad_react_WebAPI.Models;

namespace sad_react_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventClientController : ControllerBase
    {
        private readonly BookingDBContext _context;

        public EventClientController(BookingDBContext context)
        {
            _context = context;
        }

        // GET: api/EventClient
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventClient>>> GetEventClients()
        {
            return await _context.EventClients.ToListAsync();
        }

        // GET: api/EventClient/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventClient>> GetEventClient(int id)
        {
            var eventClient = await _context.EventClients.FindAsync(id);

            if (eventClient == null)
            {
                return NotFound();
            }

            return eventClient;
        }

        // PUT: api/EventClient/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEventClient(int id, EventClient eventClient)
        {
            //if (id != eventClient.id)
            //{
            //    return BadRequest();
            //}

            eventClient.id = id;

            _context.Entry(eventClient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EventClient
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventClient>> PostEventClient(EventClient eventClient)
        {
            _context.EventClients.Add(eventClient);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEventClient", new { id = eventClient.id }, eventClient);
        }

        // DELETE: api/EventClient/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEventClient(int id)
        {
            var eventClient = await _context.EventClients.FindAsync(id);
            if (eventClient == null)
            {
                return NotFound();
            }

            _context.EventClients.Remove(eventClient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EventClientExists(int id)
        {
            return _context.EventClients.Any(e => e.id == id);
        }
    }
}
