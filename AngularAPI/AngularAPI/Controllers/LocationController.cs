﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using AngularAPI.Context;
using AngularAPI.Models;
namespace AngularAPI.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]
        public class LocationController : ControllerBase
        {
            private readonly AppDbContext _context;

            public LocationController(AppDbContext context)
            {
                _context = context;
            }

            // GET: api/Location
            [HttpGet]
            public IActionResult GetLocations()
            {
        
                 var LocationNames = _context.Locations.Select(Location => Location.LocationName).ToList();
                 return Ok(LocationNames);
            }

            // GET: api/Location/5
            [HttpGet("{id}")]
            public IActionResult GetLocation(int id)
            {
                var location = _context.Locations.Find(id);

                if (location == null)
                {
                    return NotFound();
                }

                return Ok(location);
            }

            // POST: api/Location
            [HttpPost]
            public async Task<ActionResult<Location>> PostLocation(Location location)
            {
                _context.Locations.Add(location);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetLocation", new { id = location.LocationId }, location);
            }

            // PUT: api/Location/5
            [HttpPut("{id}")]
            public async Task<IActionResult> PutLocation(int id, Location location)
            {
                if (id != location.LocationId)
                {
                    return BadRequest();
                }

                _context.Entry(location).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LocationExists(id))
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

            // DELETE: api/Location/5
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteLocation(int id)
            {
                var location = await _context.Locations.FindAsync(id);
                if (location == null)
                {
                    return NotFound();
                }

                _context.Locations.Remove(location);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool LocationExists(int id)
            {
                return _context.Locations.Any(e => e.LocationId == id);
            }
        }
    }
