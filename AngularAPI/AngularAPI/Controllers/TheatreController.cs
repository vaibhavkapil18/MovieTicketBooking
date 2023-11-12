﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularAPI.Context;
using AngularAPI.Models;

namespace AngularAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheatresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TheatresController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Theatres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Theatre>>> GetTheatres()
        {
            return await _context.Theatres.ToListAsync();
        }

        // GET: api/Theatres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Theatre>> GetTheatre(int id)
        {
            var theatre = await _context.Theatres.FindAsync(id);

            if (theatre == null)
            {
                return NotFound();
            }

            return theatre;
        }

        // PUT: api/Theatres/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTheatre(int id, Theatre theatre)
        {
            if (id != theatre.TheatreId)
            {
                return BadRequest();
            }

            _context.Entry(theatre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TheatreExists(id))
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

        // POST: api/Theatres
        [HttpPost]
        public async Task<ActionResult<Theatre>> PostTheatre(Theatre theatre)
        {
            _context.Theatres.Add(theatre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTheatre", new { id = theatre.TheatreId }, theatre);
        }

        // DELETE: api/Theatres/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Theatre>> DeleteTheatre(int id)
        {
            var theatre = await _context.Theatres.FindAsync(id);
            if (theatre == null)
            {
                return NotFound();
            }

            _context.Theatres.Remove(theatre);
            await _context.SaveChangesAsync();

            return theatre;
        }
        // GET: api/Theatres/ByMovie/{movieId}
        [HttpGet("ByMovie/{movieId}")]
        public async Task<ActionResult<IEnumerable<Theatre>>> GetTheatresByMovie(int movieId)
        {
            // Find theaters associated with the specified movie
            var theaters = await _context.Theatres.Where(t => t.MovieId == movieId).ToListAsync();

            if (theaters == null || theaters.Count == 0)
            {
                return NotFound();
            }

            return theaters;
        }

        private bool TheatreExists(int id)
        {
            return _context.Theatres.Any(e => e.TheatreId == id);
        }
    }
}
